import { newMovimentationData } from '../../../data/useCases/movimentation/newMovimentation'
import { newMovimentationInfra } from '../../../infra/prisma/movimentation/newMovimentation'
import { newMovimentationPresentation } from '../../../presentation/controllers/movimentation/newMovimentation'
import { newImageFactory } from '../image/newImage'

export const newMovimentationFactory = () => {
  const newImage = newImageFactory()
  const newMovimentationInfraReal = new newMovimentationInfra()
  const newMovimentationDataReal = new newMovimentationData(
    newMovimentationInfraReal,
    newImage
  )
  return new newMovimentationPresentation(newMovimentationDataReal)
}
