import { Router } from "express";
import { getUser } from "./controller";

const routes =  Router()

routes.get('/', getUser)

export default routes