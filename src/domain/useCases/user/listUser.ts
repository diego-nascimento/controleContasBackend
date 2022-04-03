import { userModel } from '../../models/user'

export interface IlistUsers {
  list(): Promise<userModel[]>
}
