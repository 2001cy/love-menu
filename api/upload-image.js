import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const config = {
    api: {
        bodyParser: false,
    },
};

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

    try {
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(chunk);
        }
        const fileBuffer = Buffer.concat(chunks);
        if (!fileBuffer.length) {
            return res.status(400).json({ error: '未收到文件' });
        }
        const fileName = `dish-${Date.now()}-${Math.random().toString(36).substr(2,8)}.jpg`;
        const { data, error } = await supabase.storage
            .from('dish-images')
            .upload(fileName, fileBuffer, {
                contentType: 'image/jpeg',
                upsert: false
            });
        if (error) throw error;
        const publicUrl = supabase.storage.from('dish-images').getPublicUrl(fileName).data.publicUrl;
        return res.status(200).json({ url: publicUrl });
    } catch (error) {
        console.error('Upload error:', error);
        return res.status(500).json({ error: error.message || '上传失败' });
    }
}
