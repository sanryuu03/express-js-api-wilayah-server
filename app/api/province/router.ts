import express from 'express'
import { getData, getDataName } from './controller'
const router = express.Router()

router.get('/', getData)
router.get('/:code/name', getDataName)

export default router
