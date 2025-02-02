import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import { nanoid } from 'nanoid'

//temporary data:
let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
]

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req)
  res.json({ message: 'Data received!!', data: req.body })
})

// route to get all jobs
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs })
})

//create a job
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body
  if (!company || !position) {
    res
      .status(400)
      .json({ msg: 'Please provide company and position' })
    return
  }
  const id = nanoid(10)
  const job = { id, company, position }
  jobs.push(job)
  res.status(201).json({ job })
})

//get single job
app.get('/api/v1/jobs/:id', (req, res) => {
  console.log(req.body)
  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return res.status(404).json({msg: `No job with ID ${id}`})
  }
  res.status(200).json({job})
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
