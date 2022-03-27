import { IImage } from './image'

export type userModel = {
  id: number
  name: string
  image?: IImage | null
}
