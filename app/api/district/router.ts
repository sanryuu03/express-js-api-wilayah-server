import express from 'express'
import { getData, getFilteredData, getDataName } from './controller'
const router = express.Router()

router.get('/', getData)
router.get('/fromRegency/:id', getFilteredData)
router.get('/:code/name', getDataName)

export default router
