import { contaModel } from '../../models/conta'
import { IImageParams } from '../../models/image'

export type createContaParams = {
  name: string
  value: number
  expirationDate: Date
  paymentDate: Date | null
  image?: {
    path: string
  }
}

export interface InewConta {
  createConta({
    expirationDate,
    name,
    paymentDate,
    value
  }: createContaParams): Promise<contaModel>
}
