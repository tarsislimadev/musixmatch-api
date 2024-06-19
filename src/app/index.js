import express from 'express'
import { createServer } from 'http'
import { join } from 'path'
import { Server } from 'socket.io'
import { PORT } from './config.js'

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('message', (data) => {
    console.log('socket on message', data)
  })

  socket.on('message 01', (data) => {
    console.log('socket on message 01', data)
  })
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))
