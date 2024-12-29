export default function handler(req, res) {
    if (req.method === 'POST') {
        const { target } = req.body;
        if (!target) {
            return res.status(400).json({ message: 'Target diperlukan.' });
        }

        global.attackRequests = global.attackRequests || [];
        global.attackRequests.push({ target, status: 'pending' });

        res.status(201).json({ message: 'Request diterima.', target });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
