import { contaModel } from '../../../domain/models/conta'

export interface IListContasInfra {
  list(): Promise<contaModel[]>
}
