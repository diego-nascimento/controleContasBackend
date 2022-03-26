import { contaModel } from '../../../domain/models/conta'
import { createContaParams } from '../../../domain/useCases/conta/newConta'

export type InewContaInfraParams = {
  name: string
  value: number
  expirationDate: Date
  paymentDate: Date | null
}

export interface InewContaInfra {
  createConta({
    expirationDate,
    name,
    paymentDate,
    value
  }: InewContaInfraParams): Promise<contaModel>
}
