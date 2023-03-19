import express, { Application, Response, Request } from 'express'
import questionsRoute from './routes/questions-route'

const app: Application = express()

app.use('/', (res: Response, req: Request) => {
	res.json({ test: 'rest' })
})

app.use('/api/questions', questionsRoute)

export default app
