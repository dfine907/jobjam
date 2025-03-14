import 'express-async-errors'
import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(StatusCodes.OK).json({ jobs })
}

// TRY CATCH EXAMPLE
// export const createJob = async (req, res) => {
//   try {
//     const job = await Job.create('text')
//     res.status(201).json({ job })
//   } catch (error) {
//     console.log(error)

//     res.status(500).json({ msg: 'Server Error' })
//   }
// }

//USING PACKAGE - errors are passed to middleware in the server app.use()
export const createJob = async (req, res) => {
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

export const getJob = async (req, res) => {
  const { id } = req.params
  const job = await Job.findById(id)

  if (!job)throw new NotFoundError(`No job with ID ${id}`)
  res.status(StatusCodes.OK).json({ job })
}

export const updateJob = async (req, res) => {
  const { id } = req.params
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  })
  if (!updatedJob) throw new NotFoundError(`No job with ID ${id}`)

  res
    .status(StatusCodes.OK)
    .json({ msg: 'job updated successfully!', updatedJob })
}

export const deleteJob = async (req, res) => {
  const { id } = req.params
  const removedJob = await Job.findByIdAndDelete(id)

  if (!removedJob) throw new NotFoundError(`No job with ID ${id}`)

  res
    .status(StatusCodes.OK)
    .json({ msg: 'job deleted successfully!', job: removedJob })
}
