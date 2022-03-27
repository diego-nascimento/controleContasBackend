import { Router } from 'express'
import { multerConfig } from '../../../infra/multer/config'
import { httpExpressController } from '../../adapters/httpExpressController'

import { newUserFactory } from '../../factory/user/newUser'

const routes = Router()

routes.post(
  '/user',
  multerConfig.single('image'),
  httpExpressController(newUserFactory())
)

export default routes
