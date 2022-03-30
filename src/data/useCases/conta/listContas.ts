import { contaModel } from '../../../domain/models/conta'
import {
  IListContas,
  listContasResponse
} from '../../../domain/useCases/conta/listConta'
import { IListContasInfra } from '../../protocols/conta/listConta'

export class listContasData implements IListContas {
  private readonly contas: IListContasInfra
  constructor(contas: IListContasInfra) {
    this.contas = contas
  }

  async listContas({ after, before }): Promise<listContasResponse> {
    try {
      const { contas, soma } = await this.contas.list({
        after,
        before
      })
      return {
        contas,
        soma
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
