export default function handler(req, res) {
    global.attackRequests = global.attackRequests || [];
    const request = global.attackRequests.find((req) => req.status === 'pending');

    if (!request) {
        return res.status(404).json({ message: 'Tidak ada permintaan.' });
    }

    request.status = 'processing';
    res.status(200).json(request);
}
