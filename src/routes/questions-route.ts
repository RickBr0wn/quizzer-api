import express from 'express'
import controller from '../controllers'

const router = express.Router()

/**
 @summary HEALTH CHECK
 @route   GET /api/questions/health-check
 @desc    A basic operation of the server: Should reply `ping`.
 @access  Public
 @header  null
 @body    null
*/
router.get('/health-check', controller.healthCheck)

/**
 @summary HEALTH CHECK
 @route   GET /api/questions/health-check
 @desc    A basic operation of the server: Should reply `ping`.
 @access  Public
 @header  null
 @body    null
*/
router.get('/get-questions/:amount', controller.getQuestionsByAmount)

export = router
