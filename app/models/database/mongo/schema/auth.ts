import mongoose from 'mongoose'

const AccountSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  providerAccountId: {
    type: String,
    required: true,
  },
  refresh_token: {
    type: String,
  },
  access_token: {
    type: String,
  },
  description: {
    type: String,
  },
  expires_at: {
    type: Number,
  },
  token_type: {
    type: String,
  },
  scope: {
    type: String,
  },
  id_token: {
    type: String,
  },
  session_state: {
    type: String,
  },
})

export const Account =
  mongoose.models.Account || mongoose.model('Account', AccountSchema)

const SessionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  sessionToken: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  user: {
    // type: User,
    required: true,
  },
})

export const Session =
  mongoose.models.Session || mongoose.model('Session', SessionSchema)

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  emailVerified: {
    type: Date,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  accounts: {
    type: Account[],
    required: true,
  },
  sessions: {
    type: Session[],
    required: true,
  },
})

export const User = mongoose.models.User || mongoose.model('User', UserSchema)

const VerificationTokenSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
    required: true,
  },
})

export const VerificationToken =
  mongoose.models.VerificationToken ||
  mongoose.model('VerificationToken', VerificationTokenSchema)
