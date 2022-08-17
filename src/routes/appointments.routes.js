const { Router } = require('express')

const {
  createAppointmentController,
  getAllAppointmentsController,
  getAppointmentController,
  updateAppointmentController,
} = require('../controllers/appointmentsController')

const router = Router()

router
  .route('/')
  .get(getAllAppointmentsController)
  .post(createAppointmentController)

router
  .route('/:id')
  .get(getAppointmentController)
  .patch(updateAppointmentController)

module.exports = router
