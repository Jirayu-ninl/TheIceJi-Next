import mysql from 'mysql2'

class SQL {
  URL: string
  connection: any
  constructor(URL) {
    this.URL = URL
    this.connection
  }
  connect() {
    this.connection = mysql.createConnection(process.env.DATABASE_URL)
  }
  end() {
    this.connection.end()
  }
}
