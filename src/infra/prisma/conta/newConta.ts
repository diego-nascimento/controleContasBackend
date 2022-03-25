import { InewContaInfra } from '../../../data/protocols/conta/newConta'
import { contaModel } from '../../../domain/models/conta'
import { createContaParams } from '../../../domain/useCases/conta/newConta'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class newContaInfra implements InewContaInfra {
  async createConta({
    expirationDate,
    name,
    paymentDate,
    value
  }: createContaParams): Promise<contaModel> {
    try {
      const newConta = await prisma.conta.create({
        data: {
          expirationDate,
          name,
          paymentDate,
          value
        }
      })
      return newConta
    } catch (error) {
      throw new Error(error)
    }
  }
}
