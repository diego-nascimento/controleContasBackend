import { InewMovimentation } from '../../../domain/useCases/movimentation/newMovimentation'
import { IController } from '../../helpers/controllersProtocol'
import { handleResponses } from '../../helpers/handleResponses'
import { httpRequest, httpResponse } from '../../helpers/httpProtocols'
import { responseOptions } from '../../helpers/responses'

export class newMovimentationPresentation implements IController {
  private readonly movimentation: InewMovimentation
  private readonly requiredFields = ['date', 'status', 'name', 'value']

  constructor(newMovimentation: InewMovimentation) {
    this.movimentation = newMovimentation
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

      const { date, status, name, value } = request.body
      const user: string | undefined = request.body.user
      const file = request.file

      const response = await this.movimentation.createMovimentation({
        status,
        name,
        date,
        value: parseFloat(value),
        user: user ? parseInt(user) : undefined,
        image: file?.path
          ? {
              path: file.path
            }
          : undefined
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
