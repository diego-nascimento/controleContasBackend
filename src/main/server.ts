import express, { Express } from 'express'
import { routes } from './routes'

class Server {
  server: Express

  constructor() {
    this.server = express()
    this.midwares()
  }

  midwares() {
    this.server.use(express.json())
    this.server.use(routes)
  }
}

export default new Server().server
