import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = 5000

app.get('/', (req: Request, res: Response) => {
	res.statusCode = 200
	res.send('hello-world')
})

app.listen(port, () => {
	console.log(`🌍 connected on ${port}`)
})
