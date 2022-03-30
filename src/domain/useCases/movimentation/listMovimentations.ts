import { movimentationModel } from '../../models/movimentation'

export interface listMovimentationParams {
  before?: string
  after?: string
  status?: string
  user?: number
}

export interface listMovimentationResponse {
  movimentations: movimentationModel[]
  soma: number
}

export interface IListMovimentation {
  listMovimentation({
    after,
    before,
    status,
    user
  }: listMovimentationParams): Promise<listMovimentationResponse>
}
