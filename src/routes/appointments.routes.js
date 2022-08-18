const { Router } = require('express')

const {
  createAppointmentController,
  getAllAppointmentsController,
  getAppointmentController,
  updateAppointmentController,
  deleteAppointmentController,
} = require('../controllers/appointmentsController')

const router = Router()

router
  .route('/')
  .get(getAllAppointmentsController)
  .post(createAppointmentController)

router
  .route('/:id')
  .get(getAppointmentController)
  .delete(deleteAppointmentController)

router
  .route('/approve-or-cancel-appointment/:id')
  .patch(updateAppointmentController)

module.exports = router
