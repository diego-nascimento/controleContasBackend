import { contaModel } from '../../../domain/models/conta'
import {
  createContaParams,
  InewConta
} from '../../../domain/useCases/conta/newConta'
import { InewContaInfra } from '../../protocols/conta/newConta'

export class newContaData implements InewConta {
  private readonly conta: InewContaInfra
  constructor(conta: InewContaInfra) {
    this.conta = conta
  }

  async createConta({
    expirationDate,
    name,
    paymentDate,
    value
  }: createContaParams): Promise<contaModel> {
    try {
      return await this.conta.createConta({
        expirationDate,
        name,
        paymentDate,
        value
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
