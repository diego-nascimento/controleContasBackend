import { PrismaClient } from '@prisma/client'
import { InewImageInfra } from '../../../data/protocols/image/newImage'
import { IImageParams, IImage } from '../../../domain/models/image'

const prisma = new PrismaClient()

export class newImageInfra implements InewImageInfra {
  async newImage({ path, account }: IImageParams): Promise<IImage> {
    try {
      const newImage = await prisma.image.create({
        data: {
          url: path,
          Conta: {
            connect: {
              id: account
            }
          }
        }
      })

      return newImage
    } catch (error) {
      throw new Error(error)
    }
  }
}
