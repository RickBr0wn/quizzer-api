import { Request, Response } from 'express'

export type HealthCheck = { message: string }

export default (req: Request, res: Response<HealthCheck>) => {
	res.statusCode = 200
	res.json({ message: '✅ - health check successful.' })
}
