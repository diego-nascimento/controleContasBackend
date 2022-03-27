import { InewUser } from '../../../domain/useCases/user/newUser'
import { IController } from '../../helpers/controllersProtocol'
import { handleResponses } from '../../helpers/handleResponses'
import { httpRequest, httpResponse } from '../../helpers/httpProtocols'
import { responseOptions } from '../../helpers/responses'

export class newUserPresentation implements IController {
  private readonly user: InewUser
  private readonly requiredFields = ['name']

  constructor(user: InewUser) {
    this.user = user
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

      const { name } = request.body
      const file = request.file

      const response = await this.user.newUser({
        name,
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
