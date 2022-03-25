import { contaModel } from '../../../domain/models/conta'
import { createContaParams } from '../../../domain/useCases/conta/newConta'

export interface InewContaInfra {
  createConta({
    expirationDate,
    name,
    paymentDate,
    value
  }: createContaParams): Promise<contaModel>
}
