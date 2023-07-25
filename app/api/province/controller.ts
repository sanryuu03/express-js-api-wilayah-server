import { Request, Response } from 'express'
import { provincesSchema as province } from './model'
import { getErrorMessage } from '../../../utils/ErrorHandling'

export const getData = async (req: Request, res: Response) => {
  try {
    const response = await province.findAll({
      attributes: ['id', 'code', 'name'],
    })
    const umpanBalik = {
      error: false,
      message: 'success',
      berisi: response,
    }
    return res.status(200).json({ umpanBalik })
  } catch (err) {
    const umpanBalik = {
      error: true,
      message: getErrorMessage(err),
      berisi: 'kosong',
    }
    return res
      .status(500)
      .json({ umpanBalik: umpanBalik || `Internal server error` })
  }
}

export const getDataName = async (req: Request, res: Response) => {
  const provinceid = req.params.code
  try {
    const response = await province.findOne({
      attributes: ['code', 'name'],
      where: { code: provinceid },
    })

    const umpanBalik = {
      error: false,
      message: 'success',
      berisi: response,
    }
    return res.status(200).json({ umpanBalik })
  } catch (err) {
    const umpanBalik = {
      error: true,
      message: getErrorMessage(err),
      berisi: 'kosong',
    }
    return res
      .status(500)
      .json({ umpanBalik: umpanBalik || `Internal server error` })
  }
}
