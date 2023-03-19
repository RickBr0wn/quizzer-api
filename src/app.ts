import express, { Application, Response, Request } from 'express'
import questionsRoute from './routes/questions-route'
import bodyParser from 'body-parser'

const app: Application = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'blody hell!' })
})

app.use('/api/questions', questionsRoute)

app.use((req: Request, res: Response) => {
	const error = new Error('not found')

	return res.status(400).json({
		message: error.message
	})
})

export default app
