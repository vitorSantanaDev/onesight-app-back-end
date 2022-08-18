const AppointmentModel = require('../models/AppointmentModel')

exports.getAllAppointmentsController = async (req, res) => {
  const appointments = await AppointmentModel.find()
  try {
    return res.status(200).json({
      status: 'success',
      data: { appointments },
    })
  } catch (err) {
    console.error(err.message)
  }
}

exports.createAppointmentController = async (req, res) => {
  try {
    const appointment = await AppointmentModel.create(req.body)

    return res.status(201).json({
      status: 'success',
      data: {
        appointment,
      },
    })
  } catch (err) {
    console.err(err.message)
  }
}

exports.getAppointmentController = async (req, res) => {
  try {
    const { id: appointmentID } = req.params

    const appointment = await AppointmentModel.findById(appointmentID).select(
      '-__v'
    )

    return res.status(200).json({
      status: 'success',
      data: {
        appointment,
      },
    })
  } catch (err) {
    console.error(err.message)
  }
}

exports.updateAppointmentController = async (req, res) => {
  try {
    const { id: appointmentID } = req.params
    const { status } = req.body

    const newAppointment = await AppointmentModel.findByIdAndUpdate(
      appointmentID,
      { status },
      {
        new: true,
        runValidators: true,
      }
    )

    return res.status(200).json({
      status: 'success',
      data: {
        newAppointment,
      },
    })
  } catch (err) {
    console.error(err.message)
  }
}

exports.deleteAppointmentController = async (req, res) => {
  try {
    const { id: appointmentID } = req.params

    await AppointmentModel.findByIdAndDelete(appointmentID)

    return res.status(200).json({
      status: 'success',
    })
  } catch (err) {
    console.error(err.message)
  }
}
