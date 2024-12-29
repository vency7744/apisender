export default function handler(req, res) {
    console.log('Permintaan diterima:', req.body); // Debug log untuk mencatat permintaan

    if (req.method === 'POST') {
        const { target } = req.body;

        if (!target) {
            console.error('Target tidak ditemukan dalam permintaan'); // Log kesalahan jika target tidak ada
            return res.status(400).json({ success: false, message: 'Target tidak ditemukan' });
        }

        // Log target yang diterima
        console.log('Target diterima:', target);

        // Respon berhasil
        return res.status(200).json({ success: true, message: 'Request diterima.', target });
    } else {
        console.error('Metode tidak didukung:', req.method); // Log jika metode tidak didukung
        return res.status(405).json({ success: false, message: 'Metode tidak didukung' });
    }
}
