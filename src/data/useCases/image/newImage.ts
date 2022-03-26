import { IImageParams, IImage } from '../../../domain/models/image'
import { InewImage } from '../../../domain/useCases/image/newImage'
import { InewImageInfra } from '../../protocols/image/newImage'

export class newImageData implements InewImage {
  private readonly newImageInfra: InewImageInfra

  constructor(newImageInfra: InewImageInfra) {
    this.newImageInfra = newImageInfra
  }

  async newImage({ path, account }: IImageParams): Promise<IImage> {
    try {
      return await this.newImageInfra.newImage({
        account,
        path
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
