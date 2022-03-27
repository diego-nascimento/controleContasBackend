import { userModel } from '../../models/user'
import { IImageParams } from '../image/newImage'

export type userParams = {
  name: string
  image?: IImageParams
}

export interface InewUser {
  newUser({ name, image }: userParams): Promise<userModel>
}
