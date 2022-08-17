const mongoose = require('mongoose')

const apponitmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'It is necessary to provide a date for the appointment'],
  },
  name: {
    type: String,
    required: [true, 'It is necessary to inform the name of the appointment'],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: 'APPROVED',
    enum: {
      values: ['APPROVED', 'CANCELED'],
      message: 'Status is either: APPROVED or CANCELED',
    },
  },
})

const AppointmentModel = mongoose.model('AppointmentModel', apponitmentSchema)

module.exports = AppointmentModel
