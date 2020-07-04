const express = require('express')
const app = express()
require('dotenv').config()
const db = require('./libs/db/db.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on port ${process.env.SERVER_PORT}`)
})
