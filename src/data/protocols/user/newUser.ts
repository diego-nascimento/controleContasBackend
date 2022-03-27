import { userModel } from '../../../domain/models/user'

export type InewUserInfraParams = {
  name: string
  image?: number
}

export interface InewUserInfra {
  createUser({ name }: InewUserInfraParams): Promise<userModel>
}
