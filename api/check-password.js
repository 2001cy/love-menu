export const runtime = "edge";
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { password } = req.body;
    const correctPassword = process.env.ADMIN_PASSWORD || 'love2026';
    if (password === correctPassword) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, error: '密码错误' });
    }
}
