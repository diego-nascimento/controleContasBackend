import { newImageData } from '../../../data/useCases/image/newImage'
import { newImageInfra } from '../../../infra/prisma/image/newImage'

export const newImageFactory = () => {
  const newImageInfraReal = new newImageInfra()
  return new newImageData(newImageInfraReal)
}
