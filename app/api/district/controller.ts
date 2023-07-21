import { Request, Response } from 'express'
import { districtSchema as district } from './model'
import { getErrorMessage } from 'utils/ErrorHandling'

export const getData = async (req: Request, res: Response) => {
  try {
    const response = await district.findAll({
      attributes: ['id', 'code', 'city_code', 'name'],
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
    const response = await district.findAll({
      attributes: ['id', 'code', 'city_code', 'name'],
      where: { city_code: id },
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
  const districtid = req.params.code
  try {
    const response = await district.findOne({
      attributes: ['code', 'name'],
      where: { code: districtid },
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
