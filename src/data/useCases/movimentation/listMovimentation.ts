import {
  IListMovimentation,
  listMovimentationParams,
  listMovimentationResponse
} from '../../../domain/useCases/movimentation/listMovimentations'
import { IListMovimentationInfra } from '../../protocols/movimentaion/listMovimentation'

export class listMovimentationData implements IListMovimentation {
  private readonly movimentations: IListMovimentationInfra
  constructor(contas: IListMovimentationInfra) {
    this.movimentations = contas
  }

  async listMovimentation({
    after,
    before
  }: listMovimentationParams): Promise<listMovimentationResponse> {
    try {
      const { movimentations, soma } = await this.movimentations.list({
        after,
        before
      })
      return {
        movimentations,
        soma
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
