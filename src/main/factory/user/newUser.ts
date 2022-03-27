import { newUserData } from '../../../data/useCases/user/newUser'
import { newUserInfra } from '../../../infra/prisma/user/newUser'
import { newUserPresentation } from '../../../presentation/controllers/user/newUser'
import { newImageFactory } from '../image/newImage'

export const newUserFactory = () => {
  const image = newImageFactory()
  const newUserInfraReal = new newUserInfra()
  const newUserDataReal = new newUserData(newUserInfraReal, image)
  return new newUserPresentation(newUserDataReal)
}
