import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'



// routers
import jobRouter from './routes/jobRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/api/v1/jobs', jobRouter)

//below middleware will take care of the REQUESTS, but not the server
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})
//gets triggered by existing controllers and the express-async-errors package
// app.use((err, req, res, next)=> {
//   console.log(err)
//   res.status(500).json({msg: "Oops! Something went wrong!"})
// })
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

//SET UP DATABASE HERE USING MONGOOSE
try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`Server running on ${port}`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
