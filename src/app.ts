import express, { Application } from 'express'
import questionsRoute from './routes/questions-route'

const app: Application = express()

app.use('/api/questions', questionsRoute)

export default app
