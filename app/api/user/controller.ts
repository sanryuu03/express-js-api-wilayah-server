import { Request,Response } from "express";

type User = {
  user:string,
  email:string
}

export const getUser = (req:Request, res:Response) => {
  const user:Array<User>=[
    {
      user:"san",
      email:"san@gmail.com"
    },
    {
      user:"ryuu",
      email:"ryuu@gmail.com"
    },
    {
      user:"sanryuu",
      email:"sanryuu@gmail.com"
    },
  ]

  return res.json(user)
}