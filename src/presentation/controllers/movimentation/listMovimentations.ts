import { IListMovimentation } from '../../../domain/useCases/movimentation/listMovimentations'
import { IController } from '../../helpers/controllersProtocol'
import { handleResponses } from '../../helpers/handleResponses'
import { httpRequest, httpResponse } from '../../helpers/httpProtocols'
import { responseOptions } from '../../helpers/responses'

export class listMovimentationsPresentation implements IController {
  private readonly movimentations: IListMovimentation
  constructor(contas: IListMovimentation) {
    this.movimentations = contas
  }

  async handler(request: httpRequest): Promise<httpResponse> {
    try {
      const after = request.body.after
      const before = request.body.before
      const status = request.body.status
      const user = request.body.user

      if (status && status !== 'exit' && status !== 'entry') {
        return handleResponses({
          data: `Error: status should have values entry or exit`,
          status: responseOptions.badRequest
        })
      }

      const response = await this.movimentations.listMovimentation({
        after,
        before,
        status,
        user
      })

      return await handleResponses({
        status: 200,
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
