import { contaModel } from '../../models/conta'

export interface IListContas {
  listContas(): Promise<contaModel[]>
}
