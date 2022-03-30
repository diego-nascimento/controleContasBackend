import { IListContas } from '../../../domain/useCases/conta/listConta'
import { IController } from '../../helpers/controllersProtocol'
import { handleResponses } from '../../helpers/handleResponses'
import { httpRequest, httpResponse } from '../../helpers/httpProtocols'
import { responseOptions } from '../../helpers/responses'

export class listContasPresentation implements IController {
  private readonly contas: IListContas
  constructor(contas: IListContas) {
    this.contas = contas
  }

  async handler(request: httpRequest): Promise<httpResponse> {
    try {
      const after = request.body.after
      const before = request.body.before

      const response = await this.contas.listContas({ after, before })

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
