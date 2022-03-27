import { IImage } from '../../../domain/models/image'
import {
  IImageParams,
  InewImage
} from '../../../domain/useCases/image/newImage'
import { InewImageInfra } from '../../protocols/image/newImage'

export class newImageData implements InewImage {
  private readonly newImageInfra: InewImageInfra

  constructor(newImageInfra: InewImageInfra) {
    this.newImageInfra = newImageInfra
  }

  async newImage({ path }: IImageParams): Promise<IImage> {
    try {
      return await this.newImageInfra.newImage({
        path
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
