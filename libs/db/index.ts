// import firebase from './firebase'
import mongo from './mongo'
import redis from './redis'

const db = { mongo, redis }

export { default as Mongo } from './mongo'
export { default as Redis } from './redis'

export default db
