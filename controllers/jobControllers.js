import 'express-async-errors'
import Job from '../models/JobModel.js'
import { nanoid } from 'nanoid'

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
]

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({ jobs })
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
  res.status(201).json({ job })
}

export const getJob = async (req, res) => {
  const { id } = req.params
  const job = await Job.findById(id)
  console.log(job)

  if (!job) {
    return res.status(404).json({ msg: `No job with ID ${id}` })
  }
  res.status(200).json({ job })
}

export const updateJob = async (req, res) => {
  const { company, position } = req.body
  if (!company || !position) {
    return res
      .status(400)
      .json({ msg: 'Please provide company and position' })
  }
  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return res.status(404).json({ msg: `No job with ID ${id}` })
  }
  job.company = company
  job.position = position
  res.status(200).json({ msg: 'job updated successfully!', job })
}

export const deleteJob = async (req, res) => {
  const { id } = req.params
  const removedJob = await Job.findByIdAndDelete(id)
  if (!removedJob) {
    return res.status(404).json({ msg: `No job with ID ${id}` })
  }

  res.status(200).json({ msg: 'job deleted successfully!', job: removedJob})
}
