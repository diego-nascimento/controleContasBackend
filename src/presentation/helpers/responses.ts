import { httpResponse } from './httpProtocols'

export enum responseOptions {
  success = 200,
  badRequest = 400,
  serverError = 500
}

export const error400 = (message: string): httpResponse => {
  return {
    statusCode: 400,
    body: `Error: ${message}`
  }
}

export const error500 = (message: string): httpResponse => {
  return {
    statusCode: 500,
    body: `Error: ${message}`
  }
}

export const success = (data: any): httpResponse => {
  return {
    statusCode: 200,
    body: data
  }
}
