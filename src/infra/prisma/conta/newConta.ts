import {
  InewContaInfra,
  InewContaInfraParams
} from '../../../data/protocols/conta/newConta'
import { contaModel } from '../../../domain/models/conta'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class newContaInfra implements InewContaInfra {
  async createConta({
    expirationDate,
    name,
    paymentDate,
    value
  }: InewContaInfraParams): Promise<contaModel> {
    try {
      const newConta = await prisma.conta.create({
        data: {
          expirationDate,
          name,
          paymentDate,
          value
        },
        select: {
          id: true,
          expirationDate: true,
          name: true,
          paymentDate: true,
          value: true
        }
      })

      return newConta
    } catch (error) {
      throw new Error(error)
    }
  }
}
