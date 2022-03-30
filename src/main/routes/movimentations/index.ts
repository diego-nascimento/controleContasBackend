import { Router } from 'express'
import { multerConfig } from '../../../infra/multer/config'
import { httpExpressController } from '../../adapters/httpExpressController'
import { listMovimentationFactory } from '../../factory/movimentation/listMovimentation'
import { newMovimentationFactory } from '../../factory/movimentation/newMovimentation'

const routes = Router()

routes.post(
  '/movimentation',
  multerConfig.single('image'),
  httpExpressController(newMovimentationFactory())
)
routes.post(
  '/movimentations',
  httpExpressController(listMovimentationFactory())
)

export default routes
