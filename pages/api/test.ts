// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('req.url: ', req.url)
  res.status(200).json({ url: JSON.stringify((req.url || '' as string).replaceAll('%3A', ':')
  .replaceAll('%2F', '/')
  .replaceAll('%3F', '?')
  .replaceAll('%40', '@')
  .replaceAll('%21', '!')
  .replaceAll('%24', '$')
  .replaceAll('%27', "'")
  .replaceAll('%28', '(')
  .replaceAll('%29', ')')
  .replaceAll('%2A', '*')
  .replaceAll('%2C', ',')
  .replaceAll('%3B', ';')) })
}
