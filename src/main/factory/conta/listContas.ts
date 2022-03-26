import { listContasData } from '../../../data/useCases/conta/listContas'
import { listContasInfra } from '../../../infra/prisma/conta/listContas'
import { listContasPresentation } from '../../../presentation/controllers/conta/listConta'

export const listContasFactory = () => {
  const listContasInfraReal = new listContasInfra()
  const listContasDataReal = new listContasData(listContasInfraReal)
  return new listContasPresentation(listContasDataReal)
}
