import { User } from '@models/database/mongo'
import bcrypt from 'bcrypt'

const SignIn_Credentials = async (credentials) => {
  try {
    const { email, password } = credentials
    const thisUser = await User.findOne({ email })
    const correctPassword = await bcrypt.compare(password, thisUser.password)
    if (thisUser && correctPassword) {
      return thisUser
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

export default SignIn_Credentials
