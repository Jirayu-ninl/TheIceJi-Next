import mongoose from 'mongoose'
class Mongo {
  URL: string
  constructor(url: string) {
    this.URL = url
  }

  dbConnect = async () => {
    const connection = {}
    if (connection.isConnected) {
      return
    }
    const dbConfig = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    const db = await mongoose.connect(this.URL, dbConfig)
    connection.isConnected = db.connections[0].readyState
  }

  useMongo = mongoose
}

export default Mongo
