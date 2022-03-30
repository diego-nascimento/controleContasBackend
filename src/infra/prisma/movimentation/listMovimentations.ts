import { IListMovimentationInfra } from '../../../data/protocols/movimentaion/listMovimentation'

import { PrismaClient } from '@prisma/client'
import {
  listMovimentationParams,
  listMovimentationResponse
} from '../../../domain/useCases/movimentation/listMovimentations'

const prisma = new PrismaClient()

export class listMovimentationsInfra implements IListMovimentationInfra {
  async list({
    before,
    after,
    status
  }: listMovimentationParams): Promise<listMovimentationResponse> {
    try {
      const movimentations = await prisma.movimentation.findMany({
        where: {
          status,
          date: {
            gte: after ? new Date(after) : undefined,
            lte: before ? new Date(before) : undefined
          }
        },
        select: {
          id: true,
          date: true,
          name: true,
          status: true,
          value: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true
            }
          },
          image: {
            select: {
              id: true,
              url: true
            }
          }
        }
      })

      const aggregation = await prisma.movimentation.aggregate({
        where: {
          status,
          date: {
            gte: after ? new Date(after) : undefined,
            lte: before ? new Date(before) : undefined
          }
        },
        _sum: {
          value: true
        }
      })

      return {
        movimentations,
        soma: aggregation._sum?.value ? aggregation._sum.value : 0
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
