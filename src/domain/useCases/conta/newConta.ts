import { contaModel } from '../../models/conta'

export type createContaParams = {
  name: string
  value: number
  expirationDate: Date
  paymentDate: Date | null
}

export interface InewConta {
  createConta({
    expirationDate,
    name,
    paymentDate,
    value
  }: createContaParams): Promise<contaModel>
}
