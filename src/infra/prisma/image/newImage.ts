import { PrismaClient } from '@prisma/client'
import { InewImageInfra } from '../../../data/protocols/image/newImage'
import { IImage } from '../../../domain/models/image'
import { IImageParams } from '../../../domain/useCases/image/newImage'

const prisma = new PrismaClient()

export class newImageInfra implements InewImageInfra {
  async newImage({ path }: IImageParams): Promise<IImage> {
    try {
      const newImage = await prisma.image.create({
        data: {
          url: path
        }
      })

      return newImage
    } catch (error) {
      throw new Error(error)
    }
  }
}
