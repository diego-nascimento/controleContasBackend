import { IImage } from './image'

export type contaModel = {
  id: number
  name: string
  value: number
  expirationDate: Date
  paymentDate: Date | null
  image?: IImage | null
}
