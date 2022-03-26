import { Request, Response } from 'express'
import { IController } from '../../presentation/helpers/controllersProtocol'
import { httpRequest } from '../../presentation/helpers/httpProtocols'

interface requestWithMulter extends Request {
  file: any
}

export const httpExpressController = (controller: IController) => {
  return async (req: requestWithMulter, res: Response) => {
    const httpReq: httpRequest = {
      body: req.body,
      file: req.file
    }
    const response = await controller.handler(httpReq)
    return res.status(response.statusCode).json(response.body)
  }
}
