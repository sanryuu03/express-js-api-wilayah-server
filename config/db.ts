import dotenv from 'dotenv'
import { Dialect, Sequelize } from 'sequelize'

dotenv.config()

let dbName = process.env.database_production
let username = process.env.username_production
let password = process.env.password_production
let dbHost = process.env.host_production
let dbDriver = process.env.dialect_production

const env = process.env.NODE_ENV
if (env === 'development') {
  dbName = process.env.database_development
  username = process.env.username_development
  password = process.env.password_development
  dbHost = process.env.host_development
  dbDriver = process.env.dialect_development
}

const db = new Sequelize(dbName as string, username as string, password, {
  host: dbHost,
  dialect: dbDriver as Dialect,
})

export default db
