import { contaModel } from '../../../domain/models/conta'

export type InewContaInfraParams = {
  name: string
  value: number
  expirationDate: Date
  paymentDate: Date | null
  image?: number
  user?: number
}

export interface InewContaInfra {
  createConta({
    expirationDate,
    name,
    paymentDate,
    value,
    user,
    image
  }: InewContaInfraParams): Promise<contaModel>
}
