export const runtime = "edge";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
    if (!supabaseUrl || !supabaseServiceKey) {
        return res.status(500).json({ error: 'Supabase 配置缺失' });
    }
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false }
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();

    try {
        if (req.method === 'GET') {
            const type = req.query.type;
            if (type === 'categories') {
                const { data, error } = await supabase
                    .from('categories')
                    .select('*')
                    .order('sort_order', { ascending: true });
                if (error) throw error;
                return res.status(200).json(data);
            }
            else if (type === 'dishes') {
                const { data, error } = await supabase
                    .from('dishes')
                    .select('*, categories(name)')
                    .order('sort_order', { ascending: true });
                if (error) throw error;
                const formatted = data.map(d => ({
                    ...d,
                    category_name: d.categories ? d.categories.name : null
                }));
                return res.status(200).json(formatted);
            }
            else if (type === 'orders') {
                const { data, error } = await supabase
                    .from('orders')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(50);
                if (error) throw error;
                return res.status(200).json(data);
            }
            else {
                return res.status(400).json({ error: '未知类型' });
            }
        }
        else if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
            const { type, id, ...payload } = req.body;
            
            if (type === 'category') {
                if (req.method === 'POST') {
                    const { name, sort_order } = payload;
                    const { data, error } = await supabase
                        .from('categories')
                        .insert([{ name, sort_order }])
                        .select();
                    if (error) throw error;
                    return res.status(200).json(data[0]);
                }
                else if (req.method === 'PUT') {
                    const { name, sort_order } = payload;
                    const { data, error } = await supabase
                        .from('categories')
                        .update({ name, sort_order })
                        .eq('id', id)
                        .select();
                    if (error) throw error;
                    return res.status(200).json(data[0]);
                }
                else if (req.method === 'DELETE') {
                    const { error } = await supabase
                        .from('categories')
                        .delete()
                        .eq('id', id);
                    if (error) throw error;
                    return res.status(200).json({ success: true });
                }
            }
            else if (type === 'dish') {
                if (req.method === 'POST') {
                    const { name, category_id, sort_order, description, tags, ingredients, is_available, image_url } = payload;
                    const { data, error } = await supabase
                        .from('dishes')
                        .insert([{ name, category_id, sort_order, description, tags, ingredients, is_available, image_url, cook_count: 0 }])
                        .select();
                    if (error) throw error;
                    return res.status(200).json(data[0]);
                }
                else if (req.method === 'PUT') {
                    const { name, category_id, sort_order, description, tags, ingredients, is_available, image_url } = payload;
                    const { data, error } = await supabase
                        .from('dishes')
                        .update({ name, category_id, sort_order, description, tags, ingredients, is_available, image_url })
                        .eq('id', id)
                        .select();
                    if (error) throw error;
                    return res.status(200).json(data[0]);
                }
                else if (req.method === 'DELETE') {
                    const { error } = await supabase
                        .from('dishes')
                        .delete()
                        .eq('id', id);
                    if (error) throw error;
                    return res.status(200).json({ success: true });
                }
            }
            else {
                return res.status(400).json({ error: '未知类型' });
            }
        }
        else {
            return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Admin API error:', error);
        return res.status(500).json({ error: error.message || '服务器错误' });
    }
}
