import { movimentationModel } from '../../models/movimentation'

export interface listMovimentationParams {
  before?: string
  after?: string
}

export interface listMovimentationResponse {
  movimentations: movimentationModel[]
  soma: number
}

export interface IListMovimentation {
  listMovimentation({
    after,
    before
  }: listMovimentationParams): Promise<listMovimentationResponse>
}
