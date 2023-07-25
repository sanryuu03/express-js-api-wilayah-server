import { Request, Response } from 'express'
import { regencySchema as regency } from './model'
import { getErrorMessage } from '../../../utils/ErrorHandling'

export const getData = async (req: Request, res: Response) => {
  try {
    const response = await regency.findAll({
      attributes: ['id', 'code', 'province_code', 'name'],
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

export const getFilteredData = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const response = await regency.findAll({
      attributes: ['id', 'code', 'province_code', 'name'],
      where: { province_code: id },
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
  const regencyid = req.params.code
  try {
    const response = await regency.findOne({
      attributes: ['code', 'name'],
      where: { code: regencyid },
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
