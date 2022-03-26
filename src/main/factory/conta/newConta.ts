import { newContaData } from '../../../data/useCases/conta/newConta'
import { newContaInfra } from '../../../infra/prisma/conta/newConta'
import { newContaPresentation } from '../../../presentation/controllers/conta/newConta'
import { newImageFactory } from '../image/newImage'

export const newContaFactory = () => {
  const newImage = newImageFactory()
  const newContaInfraReal = new newContaInfra()
  const newContaDataReal = new newContaData(newContaInfraReal, newImage)
  return new newContaPresentation(newContaDataReal)
}
