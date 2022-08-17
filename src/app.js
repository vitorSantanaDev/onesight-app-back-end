const express = require('express')

const appointmentsRouter = require('./routes/appointments.routes')

const app = express()

app.use(express.json({ limit: '10kb' }))

app.use('/api/v1/appointments', appointmentsRouter)

// Request time middleware
app.use((req, res, next) => {
  req.requestTimeAt = new Date().toISOString()
  next()
})

module.exports = app
