import { httpRequest, httpResponse } from './httpProtocols'

export interface IController {
  handler(request: httpRequest): Promise<httpResponse>
}
