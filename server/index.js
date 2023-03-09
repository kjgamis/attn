const express = require('express')
const app = express()
const port = 8080

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())


app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
