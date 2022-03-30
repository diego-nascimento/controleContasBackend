import {
  listMovimentationParams,
  listMovimentationResponse
} from '../../../domain/useCases/movimentation/listMovimentations'

export interface IListMovimentationInfra {
  list({
    after,
    before
  }: listMovimentationParams): Promise<listMovimentationResponse>
}
