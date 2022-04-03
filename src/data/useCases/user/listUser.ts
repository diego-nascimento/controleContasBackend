import { userModel } from '../../../domain/models/user'
import { IlistUsers } from '../../../domain/useCases/user/listUser'

export class listUserData implements IlistUsers {
  async list(): Promise<userModel[]> {
    try {
    } catch (error) {
      throw new Error(error)
    }
  }
}
