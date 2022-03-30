import { contaModel } from '../../models/conta'

export interface listContasParams {
  before?: string
  after?: string
}

export interface listContasResponse {
  contas: contaModel[]
  soma: number
}
export interface IListContas {
  listContas({ after, before }: listContasParams): Promise<listContasResponse>
}
