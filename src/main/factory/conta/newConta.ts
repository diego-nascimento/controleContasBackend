import { newContaData } from '../../../data/useCases/conta/newConta'
import { newContaInfra } from '../../../infra/prisma/conta/newConta'
import { newContaPresentation } from '../../../presentation/controllers/conta/newConta'

export const newContaFactory = () => {
  const newContaInfraReal = new newContaInfra()
  const newContaDataReal = new newContaData(newContaInfraReal)
  return new newContaPresentation(newContaDataReal)
}
