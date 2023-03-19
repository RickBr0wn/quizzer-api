import app from '../app'
import supertest from 'supertest'

const api = supertest(app)

describe('health-check', () => {
	it('should complete a basic health check', async () => {
		const result = await api.get('/api/questions/health-check')
		expect(result.text).toBe('{"message":"✅ - health check successful."}')
		expect(result.statusCode).toBe(200)
	})
})
