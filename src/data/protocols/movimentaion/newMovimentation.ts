import { movimentationModel } from '../../../domain/models/movimentation'

export type InewMovimentationInfraParams = {
  name: string
  value: number
  date: Date
  status: string
  image?: number
  user?: number
}

export interface InewMovimentationInfra {
  createConta({
    date,
    status,
    name,
    value,
    user,
    image
  }: InewMovimentationInfraParams): Promise<movimentationModel>
}
