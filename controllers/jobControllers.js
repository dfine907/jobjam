import Job from '../models/JobModel.js'

import { nanoid } from 'nanoid'

//temporary data:
let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
]

export const getAllJobs = async (req, res) => {
    console.log(jobs)
    res.status(200).json({ jobs })
  }

  export const createJob = async (req, res) => {
    const { company, position } = req.body
    const job = await Job.create( {company, position})
    res.status(201).json({ job })
  }

  export const getJob = async (req, res) => {
    console.log(req.body)
    const { id } = req.params
    const job = jobs.find((job) => job.id === id)
    if (!job) {
      throw new Error('No jobwith that ID')
      return res.status(404).json({ msg: `No job with ID ${id}` })
    }
    res.status(200).json({ job })
  }

  export const updateJob = async (req, res) => {
    const { company, position } = req.body
    if (!company || !position) {
      return res.status(400).json({ msg: 'Please provide company and position' })
    }
    const { id } = req.params
    const job = jobs.find((job) => job.id === id)
    if(!job){
      return res.status(404).json({msg: `No job with ID ${id}`})
    }
    job.company = company
    job.position = position
    res.status(200).json({ msg: 'job updated successfully!', job })
  }

  export const deleteJob = async (req, res) => {
    const { id } = req.params
    const job = jobs.find((job) => job.id === id)
    if(!job){
      return res.status(404).json({msg: `No job with ID ${id}`})
    }
    const newJobs = jobs.filter((job)=> job.id !==id)
    jobs = newJobs
  
    res.status(200).json({ msg: 'job deleted successfully!' })
  }