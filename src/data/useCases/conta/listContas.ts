import { contaModel } from '../../../domain/models/conta'
import { IListContas } from '../../../domain/useCases/conta/listConta'
import { IListContasInfra } from '../../protocols/conta/listConta'

export class listContasData implements IListContas {
  private readonly contas: IListContasInfra
  constructor(contas: IListContasInfra) {
    this.contas = contas
  }

  async listContas(): Promise<contaModel[]> {
    try {
      return await this.contas.list()
    } catch (error) {
      throw new Error(error)
    }
  }
}
