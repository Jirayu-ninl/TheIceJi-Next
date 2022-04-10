import db from '@libs/db'
// import { db as config } from '@config'

// const DB = new db.mongo(config.MONGO_URL)
const DB = new db.mongo(process.env.MONGODB_URI)
DB.dbConnect()
const Mongo = DB.useMongo

const Note_Schema = new Mongo.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    maxlength: [40, 'Title cannot be more than 40 characters'],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
})

export const Note = Mongo.models.Note || Mongo.model('Note', Note_Schema)

const User_Schema = new Mongo.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  date: { type: Date, default: Date.now },
  provider: {
    type: String,
    required: true,
  },
  account: {
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    default: 'user',
  },
  active: {
    type: Number,
    required: true,
    default: 1,
  },
})

export const User = Mongo.models.User || Mongo.model('User', User_Schema)

const Account_Schema = new Mongo.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  date: { type: Date, default: Date.now },
  type: {
    type: String,
    required: true,
    default: 'oauth'
  },
  provider: {
    type: String,
    required: true,
  },
  providerAccountId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  access_token: {
    type: String,
    required: true,
  },
  token_type: {
    type: String,
    required: false,
  },
  scope: {
    type: String,
    required: false,
  },
})

export const Account = Mongo.models.Account || Mongo.model('Account', Account_Schema)

const UserProfile_Schema = new Mongo.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    maxlength: [20, 'First name cannot be more than 20 characters'],
  },
  lastName: {
    type: String,
    maxlength: [20, 'Last name cannot be more than 20 characters'],
  },
  about: {
    type: String,
    maxlength: [200, 'About cannot be more than 200 characters'],
  },
})

export const UserProfile =
  Mongo.models.UserProfile || Mongo.model('UserProfile', UserProfile_Schema)
