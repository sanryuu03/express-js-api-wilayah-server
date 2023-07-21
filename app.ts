import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? "3000"

app.use(express.json())
app.use(cors())
app.use(helmet())

app.get('/', (req: Request, res: Response) => {
  res.send(`express typescript api wilayah ⚡ server ${port}`)
})

app.listen(port, () => console.log(`running ⚡ port: ${port}`))