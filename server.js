const express = require('express')
const http = require('http')

//app
const app = express()
app.use(express.static('public'))

const port = process.env.PORT || 8003
const server = http.createServer(app)
server.listen(port)

