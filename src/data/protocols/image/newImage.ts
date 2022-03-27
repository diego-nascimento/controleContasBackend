import { IImage } from '../../../domain/models/image'
import { IImageParams } from '../../../domain/useCases/image/newImage'

export interface InewImageInfra {
  newImage({ path }: IImageParams): Promise<IImage>
}
