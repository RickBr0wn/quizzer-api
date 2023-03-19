import app from './app'
import SERVER from './config'

app.listen(SERVER.PORT, () => {
	console.log(`🌍 connected on ${SERVER.PORT}`)
})
