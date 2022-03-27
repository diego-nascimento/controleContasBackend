import { IImage } from '../../models/image'

export type IImageParams = {
  path: string
}

export interface InewImage {
  newImage({ path }: IImageParams): Promise<IImage>
}
