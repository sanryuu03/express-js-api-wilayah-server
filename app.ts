import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './app/api/user/router'
import provinceRouter from './app/api/province/router'
import regencyRouter from './app/api/regency/router'
import districtRouter from './app/api/district/router'
import villageRouter from './app/api/village/router'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? '3000'

app.use(express.json())
app.use(cors())
app.use(helmet())

const URL = `/api/v1`

app.get('/', (req: Request, res: Response) => {
  res.send(`express typescript api wilayah ⚡ server ${port}`)
})

app.use(`${URL}/users`, userRoutes)
app.use(`${URL}/master/provinces`, provinceRouter)
app.use(`${URL}/master/regency`, regencyRouter)
app.use(`${URL}/master/district`, districtRouter)
app.use(`${URL}/master/village`, villageRouter)

app.listen(port, () => console.log(`running ⚡ port: ${port}`))