const express = require('express')
const app = express()
require('dotenv').config()
const db = require('./libs/db')
const { attachRoutes } = require('./libs/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

attachRoutes(app)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send({
    message: 'There was a server error while processing this request.'
  })
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on port ${process.env.SERVER_PORT}`)
})
