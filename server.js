import express from 'express'
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/", (req, res)=> {
  console.log(req)
  res.json( {message: "Data received!!", data: req.body})
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})