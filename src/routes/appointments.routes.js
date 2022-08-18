const { Router } = require('express')

const {
  createAppointmentController,
  getAllAppointmentsController,
  getAppointmentController,
  deleteAppointmentController,
  updatingAppointmentController,
  approveOrCancelAppointmentController,
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
  .patch(updatingAppointmentController)

router
  .route('/approve-or-cancel-appointment/:id')
  .patch(approveOrCancelAppointmentController)

module.exports = router
