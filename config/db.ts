import { Dialect, Sequelize } from 'sequelize'
let namaDB = 'u1488126_wilayah'
let username = 'u1488126_wilayah'
let password = 'NrYY~;Ji,hR!'
let host = '127.0.0.1'
let dialect = 'mysql' as Dialect

const env = process.env.NODE_ENV
if (env === 'development') {
  namaDB = 'wilayah_development'
  username = 'root'
  password = ''
  host = 'localhost'
  dialect = 'mysql'
}

const db = new Sequelize(namaDB, username, password, {
  host: host,
  dialect: dialect,
})

export default db
