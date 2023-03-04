const express = require('express')
const route = require('./src/routes')
const cors = require('cors')
const path = require('path')
const http = require('http')
const initSocket = require('./src/socket')
const db = require('./src/configs/db')
const env = require('dotenv')

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 5000

env.config()

// sử dụng static files
app.use(express.static(path.join(__dirname, './src/public')))

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

// Sử dụng CORS
app.use(cors())

// Connect to db
db.connect()

// Khởi tại Socket
initSocket(server)

// Route init
route(app)

server.listen(PORT)
