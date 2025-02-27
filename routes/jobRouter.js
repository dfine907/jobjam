import { Router } from 'express'
const router = Router()

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobControllers.js'
import { validateJobInput } from '../middleware/validationMiddleware.js'

//just like app.post etc..
// router.get('/', getAllJobs)
// router.post('/', createJob)

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router.route('/:id').get(getJob).patch(validateJobInput, updateJob).delete(deleteJob)

export default router