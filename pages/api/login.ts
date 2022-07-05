import {
  NextApiRequest,
  NextApiResponse,
} from '../../node_modules/next/dist/shared/lib/utils'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }

  const rs = await fetch(`${process.env.baseUrl}/${req.body.role}/login/`, {
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const result = await rs.json()

  res.status(200).json(result)
}
