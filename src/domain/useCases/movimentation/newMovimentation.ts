import { movimentationModel } from '../../models/movimentation'
import { IImageParams } from '../image/newImage'

export type createMovimentationParams = {
  name: string
  value: number
  date: Date
  status: string
  image?: IImageParams
  user?: number
}

export interface InewMovimentation {
  createMovimentation({
    date,
    name,
    status,
    value,
    user
  }: createMovimentationParams): Promise<movimentationModel>
}
