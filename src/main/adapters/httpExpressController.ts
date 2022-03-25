import { Request, Response } from 'express'
import { IController } from '../../presentation/helpers/controllersProtocol'
import { httpRequest } from '../../presentation/helpers/httpProtocols'

export const httpExpressController = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpReq: httpRequest = {
      body: req.body
    }
    const response = await controller.handler(httpReq)
    return res.status(response.statusCode).json(response.body)
  }
}
