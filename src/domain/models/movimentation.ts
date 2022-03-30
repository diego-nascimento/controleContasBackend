import { IImage } from './image'
import { userModel } from './user'

export type movimentationModel = {
  id: number
  name: string
  value: number
  date: Date
  status: string
  image?: IImage | null
  user?: userModel | null
}
