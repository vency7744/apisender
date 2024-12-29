export default function handler(req, res) {
    if (req.method === 'POST') {
        const { target } = req.body;

        if (!target) {
            return res.status(400).json({ success: false, message: 'Target tidak ditemukan' });
        }

        return res.status(200).json({ success: true, message: 'Request diterima.', target });
    } else if (req.method === 'GET') {
        // Tambahkan respons default untuk GET
        return res.status(200).json({ 
            success: true, 
            message: 'API aktif. Gunakan metode POST untuk mengirim data.' 
        });
    } else {
        return res.status(405).json({ success: false, message: 'Metode tidak didukung' });
    }
}
