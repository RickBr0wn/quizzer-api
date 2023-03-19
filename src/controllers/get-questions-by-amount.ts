import { Request, Response } from 'express'

export type getQuestionsByAmount = { amount: number }

export default (req: Request, res: Response<getQuestionsByAmount>) => {
	const { amount } = req.query
	res.statusCode = 200
	res.json({ amount: Number(amount) })
}
