import { movimentationModel } from '../../models/movimentation'

export interface listMovimentationParams {
  before?: string
  after?: string
  status?: string
}

export interface listMovimentationResponse {
  movimentations: movimentationModel[]
  soma: number
}

export interface IListMovimentation {
  listMovimentation({
    after,
    before,
    status
  }: listMovimentationParams): Promise<listMovimentationResponse>
}
