import { IListContasInfra } from '../../../data/protocols/conta/listConta'
import { contaModel } from '../../../domain/models/conta'
import { PrismaClient } from '@prisma/client'
import { listContasResponse } from '../../../domain/useCases/conta/listConta'

const prisma = new PrismaClient()

export class listContasInfra implements IListContasInfra {
  async list({ before, after }): Promise<listContasResponse> {
    try {
      const contas = await prisma.conta.findMany({
        where: {
          paymentDate: {
            gte: after ? new Date(after) : undefined,
            lte: before ? new Date(before) : undefined
          }
        },
        select: {
          id: true,
          expirationDate: true,
          name: true,
          paymentDate: true,
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

      const aggregation = await prisma.conta.aggregate({
        where: {
          paymentDate: {
            gte: after ? new Date(after) : undefined,
            lte: before ? new Date(before) : undefined
          }
        },
        _sum: {
          value: true
        }
      })

      return {
        contas,
        soma: aggregation._sum?.value ? aggregation._sum.value : 0
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
