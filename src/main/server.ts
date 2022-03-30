import express, { Express, Router } from 'express'
import movimentationRoutes from './routes/movimentations'
import userRoutes from './routes/user'
import cors from 'cors'

const routes: Router[] = [movimentationRoutes, userRoutes]

class Server {
  server: Express

  constructor() {
    this.server = express()
    this.midwares()
  }

  midwares() {
    this.server.use(express.json())
    this.server.use(cors())
    for (const route of routes) {
      this.server.use(route)
    }
  }
}

export default new Server().server
