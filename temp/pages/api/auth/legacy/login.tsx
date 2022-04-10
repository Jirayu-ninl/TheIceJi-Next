import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '@models/database/mongo'
import { auth as Config } from '@config'

const Auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
  case 'POST':
    try {
      const { email, password } = req.body
      const thisUser = await User.findOne({ email })
      const correctPassword = await bcrypt.compare(
        password,
        thisUser.password
      )
      if (thisUser && correctPassword) {
        const token = jwt.sign({...thisUser}, Config.TOKEN, {
          expiresIn: 60 * 60 * 24 * 3, // ** 3 days
        })
        res
          .status(201)
          .json({
            success: true,
            password: 'match',
            token,
            userID: thisUser.userID,
            email: email.toLowerCase(),
          })
      }
      res.status(400).send('Invalid Credentials')
    } catch (error) {
      res.status(400).json({ success: false, error: error })
    }
    break
  default:
    res.status(400).json({ success: false })
    break
  }
}

export default Auth
