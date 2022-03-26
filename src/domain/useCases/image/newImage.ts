import { IImage, IImageParams } from '../../models/image'

export interface InewImage {
  newImage({ path }: IImageParams): Promise<IImage>
}
