import { movimentationModel } from '../../../domain/models/movimentation'
import { IImage } from '../../../domain/models/image'
import {
  InewMovimentation,
  createMovimentationParams
} from '../../../domain/useCases/movimentation/newMovimentation'
import { InewImage } from '../../../domain/useCases/image/newImage'
import { InewMovimentationInfra } from '../../protocols/movimentaion/newMovimentation'

export class newMovimentationData implements InewMovimentation {
  private readonly movimentation: InewMovimentationInfra
  private readonly image: InewImage
  constructor(movimentation: InewMovimentationInfra, image: InewImage) {
    this.movimentation = movimentation
    this.image = image
  }

  async createMovimentation({
    date,
    status,
    name,
    value,
    image,
    user
  }: createMovimentationParams): Promise<movimentationModel> {
    try {
      let newImage: IImage | undefined

      if (image) {
        newImage = await this.image.newImage({
          path: image.path
        })
      }

      const newMovimentation = await this.movimentation.createConta({
        name,
        date,
        status,
        value,
        image: newImage?.id || undefined,
        user: user
      })

      return {
        ...newMovimentation,
        image: newImage
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
