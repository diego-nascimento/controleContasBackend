import {
  InewContaInfra,
  InewContaInfraParams
} from '../../../data/protocols/conta/newConta'
import { contaModel } from '../../../domain/models/conta'
import { PrismaClient } from '@prisma/client'
import {
  InewUserInfra,
  InewUserInfraParams
} from '../../../data/protocols/user/newUser'
import { userModel } from '../../../domain/models/user'

const prisma = new PrismaClient()

export class newUserInfra implements InewUserInfra {
  async createUser({ name, image }: InewUserInfraParams): Promise<userModel> {
    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          image: image
            ? {
                connect: {
                  id: image
                }
              }
            : undefined
        },
        select: {
          id: true,
          name: true,
          image: true
        }
      })

      return newUser
    } catch (error) {
      throw new Error(error)
    }
  }
}
