import { contaModel } from '../../../domain/models/conta'
import { IImage } from '../../../domain/models/image'
import {
  createContaParams,
  InewConta
} from '../../../domain/useCases/conta/newConta'
import { InewImage } from '../../../domain/useCases/image/newImage'
import { InewContaInfra } from '../../protocols/conta/newConta'

export class newContaData implements InewConta {
  private readonly conta: InewContaInfra
  private readonly image: InewImage
  constructor(conta: InewContaInfra, image: InewImage) {
    this.conta = conta
    this.image = image
  }

  async createConta({
    expirationDate,
    name,
    paymentDate,
    value,
    image,
    user
  }: createContaParams): Promise<contaModel> {
    try {
      let newImage: IImage | undefined

      if (image) {
        newImage = await this.image.newImage({
          path: image.path
        })
      }

      const newConta = await this.conta.createConta({
        expirationDate,
        name,
        paymentDate,
        value,
        image: newImage?.id || undefined,
        user: user
      })

      return {
        ...newConta,
        image: newImage
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
