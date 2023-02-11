export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({ data: 'Post World' })
    } else {
        res.status(200).json({ data: 'World' })
    }
  }