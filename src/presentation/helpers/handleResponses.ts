import { error400, error500, responseOptions, success } from './responses'

type handleResponsesParams = {
  status: number
  data: any
}

export const handleResponses = ({ data, status }: handleResponsesParams) => {
  switch (status) {
    case responseOptions.serverError:
      return error500(data)
    case responseOptions.badRequest:
      return error400(data)
    default:
      return success(data)
  }
}
