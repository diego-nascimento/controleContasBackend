import { Router } from 'express'
import { multerConfig } from '../../../infra/multer/config'
import { httpExpressController } from '../../adapters/httpExpressController'
import { listContasFactory } from '../../factory/conta/listContas'
import { newContaFactory } from '../../factory/conta/newConta'

const routes = Router()

routes.post(
  '/conta',
  multerConfig.single('image'),
  httpExpressController(newContaFactory())
)
routes.post('/contas', httpExpressController(listContasFactory()))

export default routes
