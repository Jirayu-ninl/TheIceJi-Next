import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '@models/database/mongo'
import { auth as Config } from '@config'

const Auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
  case 'GET':
    try {
      const notes = await User.find({})
      res.status(200).json({ success: true, data: notes })
    } catch (error) {
      res.status(400).json({ success: false })
    }
    break
  case 'POST':
    try {
      const { email, userName, password } = req.body
      const generatedUserId = uuidv4()
      const hashedPassword = await bcrypt.hash(password, 10)

      const existingEmail = await User.findOne({ email })
      if (existingEmail) {
        return res.status(409).send('User already exists. Please login')
      }

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res
          .status(409)
          .send('User name already in used. Please change it')
      }

      const data = {
        userID: generatedUserId,
        firstName: req.body.firstName?.toLowerCase() || '',
        lastName: req.body.lastName?.toLowerCase() || '',
        email: email.toLowerCase(),
        userName: userName,
        password: hashedPassword,
      }
      const addUser = await User.create(data)
      // const token = jwt.sign(addUser, Config.TOKEN, {
      //   expiresIn: 60 * 24,
      // })
      res
        .status(201)
        .json({
          success: true,
          // token,
          userID: generatedUserId,
          email: email.toLowerCase(),
        })
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
