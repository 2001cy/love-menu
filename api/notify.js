export const runtime = "edge";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const sendKey = process.env.SERVERCHAN_SENDKEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    if (!supabaseUrl || !supabaseServiceKey) {
        return res.status(500).json({ error: 'Supabase 配置缺失' });
    }
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false }
    });

    const { items, message } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: '订单内容为空' });
    }

    try {
        const { data: orderData, error: orderError } = await supabase
            .from('orders')
            .insert([{ items, message }])
            .select('id')
            .single();
        if (orderError) throw orderError;

        for (const item of items) {
            if (item.dish_id) {
                const { data: dishData, error: fetchError } = await supabase
                    .from('dishes')
                    .select('cook_count')
                    .eq('id', item.dish_id)
                    .single();
                if (!fetchError && dishData) {
                    const newCount = (dishData.cook_count || 0) + (item.qty || 1);
                    await supabase
                        .from('dishes')
                        .update({ cook_count: newCount })
                        .eq('id', item.dish_id);
                }
            }
        }

        if (sendKey) {
            const itemsText = items.map(i => `${i.name} ×${i.qty}`).join('\n');
            const notifyContent = `【御膳房·爱心菜单】\n${itemsText}${message ? '\n留言：' + message : ''}\n时间：${new Date().toLocaleString('zh-CN')}`;
            await fetch(`https://sctapi.ftqq.com/${sendKey}.send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: '新订单来啦！', desp: notifyContent })
            });
        }

        return res.status(200).json({ success: true, orderId: orderData.id });
    } catch (error) {
        console.error('订单处理失败:', error);
        return res.status(500).json({ error: error.message || '服务器错误' });
    }
}
