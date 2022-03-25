import { Router } from 'express'
import { httpExpressController } from './adapters/httpExpressController'
import { newContaFactory } from './factory/conta/newConta'

const routes = Router()

routes.post('/conta', httpExpressController(newContaFactory()))

export { routes }
