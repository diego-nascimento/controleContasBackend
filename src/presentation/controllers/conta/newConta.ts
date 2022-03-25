import { InewConta } from '../../../domain/useCases/conta/newConta'
import { IController } from '../../helpers/controllersProtocol'
import { handleResponses } from '../../helpers/handleResponses'
import { httpRequest, httpResponse } from '../../helpers/httpProtocols'
import { responseOptions } from '../../helpers/responses'

export class newContaPresentation implements IController {
  private readonly conta: InewConta
  private readonly requiredFields = ['expirationDate', 'name', 'value']

  constructor(newConta: InewConta) {
    this.conta = newConta
  }

  async handler(request: httpRequest): Promise<httpResponse> {
    try {
      for (const field of this.requiredFields) {
        if (!request.body[field]) {
          return handleResponses({
            data: `Error: Field ${field} is required`,
            status: responseOptions.badRequest
          })
        }
      }
      const { expirationDate, name, paymentDate, value } = request.body
      const response = await this.conta.createConta({
        expirationDate,
        name,
        paymentDate,
        value
      })
      return handleResponses({
        status: responseOptions.success,
        data: response
      })
    } catch (error) {
      return handleResponses({
        status: responseOptions.serverError,
        data: error.message
      })
    }
  }
}
