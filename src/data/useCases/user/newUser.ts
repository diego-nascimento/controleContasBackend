import { IImage } from '../../../domain/models/image'
import { userModel } from '../../../domain/models/user'
import { InewImage } from '../../../domain/useCases/image/newImage'
import { InewUser, userParams } from '../../../domain/useCases/user/newUser'
import { InewUserInfra } from '../../protocols/user/newUser'

export class newUserData implements InewUser {
  private readonly image: InewImage
  private readonly user: InewUserInfra

  constructor(user: InewUserInfra, image: InewImage) {
    this.user = user
    this.image = image
  }

  async newUser({ name, image }: userParams): Promise<userModel> {
    try {
      let newImage: IImage | undefined

      if (image) {
        newImage = await this.image.newImage({
          path: image.path
        })
      }

      const newUser = await this.user.createUser({
        name,
        image: newImage?.id || undefined
      })

      return {
        ...newUser,
        image: newImage
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
