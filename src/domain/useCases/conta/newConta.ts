import { contaModel } from '../../models/conta'
import { IImageParams } from '../image/newImage'

export type createContaParams = {
  name: string
  value: number
  expirationDate: Date
  paymentDate: Date | null
  image?: IImageParams
  user?: number
}

export interface InewConta {
  createConta({
    expirationDate,
    name,
    paymentDate,
    value,
    user
  }: createContaParams): Promise<contaModel>
}
