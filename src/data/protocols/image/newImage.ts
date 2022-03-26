import { IImageParams, IImage } from '../../../domain/models/image'

export interface InewImageInfra {
  newImage({ path }: IImageParams): Promise<IImage>
}
