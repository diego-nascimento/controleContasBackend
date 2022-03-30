import {
  InewMovimentationInfra,
  InewMovimentationInfraParams
} from '../../../data/protocols/movimentaion/newMovimentation'
import { movimentationModel } from '../../../domain/models/movimentation'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class newMovimentationInfra implements InewMovimentationInfra {
  async createConta({
    name,
    date,
    status,
    value,
    image,
    user
  }: InewMovimentationInfraParams): Promise<movimentationModel> {
    try {
      const newMovimentation = await prisma.movimentation.create({
        data: {
          name,
          date,
          status,
          value: status === 'entry' ? value : -value,
          image: image
            ? {
                connect: {
                  id: image
                }
              }
            : undefined,
          user: user
            ? {
                connect: {
                  id: user
                }
              }
            : undefined
        },
        select: {
          id: true,
          date: true,
          status: true,
          name: true,
          value: true,
          image: true,
          user: {
            select: {
              id: true,
              name: true,
              image: {
                select: {
                  id: true,
                  url: true
                }
              }
            }
          }
        }
      })

      return newMovimentation
    } catch (error) {
      throw new Error(error)
    }
  }
}
