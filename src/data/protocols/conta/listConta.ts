import {
  listContasParams,
  listContasResponse
} from '../../../domain/useCases/conta/listConta'

export interface IListContasInfra {
  list({ after, before }: listContasParams): Promise<listContasResponse>
}
