import { IImage } from './image'
import { userModel } from './user'

export type contaModel = {
  id: number
  name: string
  value: number
  expirationDate: Date
  paymentDate: Date | null
  image?: IImage | null
  user?: userModel | null
}
