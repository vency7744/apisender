export default function handler(req, res) {
    if (req.method === 'POST') {
        const { target, status } = req.body;
        global.attackRequests = global.attackRequests || [];
        const request = global.attackRequests.find((req) => req.target === target);

        if (!request) {
            return res.status(404).json({ message: 'Permintaan tidak ditemukan.' });
        }

        request.status = status;
        res.status(200).json({ message: 'Status diperbarui.' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
