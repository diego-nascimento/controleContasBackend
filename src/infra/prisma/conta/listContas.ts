import { IListContasInfra } from '../../../data/protocols/conta/listConta'
import { contaModel } from '../../../domain/models/conta'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class listContasInfra implements IListContasInfra {
  async list(): Promise<contaModel[]> {
    try {
      const contas = await prisma.conta.findMany({
        select: {
          id: true,
          expirationDate: true,
          name: true,
          paymentDate: true,
          value: true,
          image: {
            select: {
              id: true,
              url: true
            }
          }
        }
      })

      return contas
    } catch (error) {
      throw new Error(error)
    }
  }
}
