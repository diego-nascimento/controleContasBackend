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
    value,
    image,
    user
  }: InewContaInfraParams): Promise<contaModel> {
    try {
      const newConta = await prisma.conta.create({
        data: {
          expirationDate,
          name,
          paymentDate,
          value,
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
          expirationDate: true,
          name: true,
          paymentDate: true,
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

      return newConta
    } catch (error) {
      throw new Error(error)
    }
  }
}
