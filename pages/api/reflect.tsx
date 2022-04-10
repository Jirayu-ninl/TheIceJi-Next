import { NextApiRequest, NextApiResponse } from 'next'

const App = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(201).send(req.body)
}

export default App
