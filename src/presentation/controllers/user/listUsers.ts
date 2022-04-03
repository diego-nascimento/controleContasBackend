import { IlistUsers } from '../../../domain/useCases/user/listUser'
import { IController } from '../../helpers/controllersProtocol'
import { handleResponses } from '../../helpers/handleResponses'
import { httpRequest, httpResponse } from '../../helpers/httpProtocols'
import { responseOptions, success } from '../../helpers/responses'

export class listUsersPresentation implements IController {
  private readonly user: IlistUsers

  constructor(user: IlistUsers) {
    this.user = user
  }

  async handler(request: httpRequest): Promise<httpResponse> {
    try {
      const response = await this.user.list()
      return success(response)
    } catch (error) {
      return handleResponses({
        status: responseOptions.serverError,
        data: error.message
      })
    }
  }
}
