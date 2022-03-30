import { listMovimentationData } from '../../../data/useCases/movimentation/listMovimentation'
import { listMovimentationsInfra } from '../../../infra/prisma/movimentation/listMovimentations'
import { listMovimentationsPresentation } from '../../../presentation/controllers/movimentation/listMovimentations'

export const listMovimentationFactory = () => {
  const listMovimentationInfraReal = new listMovimentationsInfra()
  const listMovimentationDataReal = new listMovimentationData(
    listMovimentationInfraReal
  )
  return new listMovimentationsPresentation(listMovimentationDataReal)
}
