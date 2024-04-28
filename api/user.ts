import type { ResultOk, ResultError } from './common'

export type UserType = 'admin' | 'general'
export interface User {
  id: string
  name: string
  email: string
  provider: string
  type: UserType
}
export interface GetUserError {
  message: string
}

export async function getUser(id: string, password: string): Promise<ResultOk<User> | ResultError<GetUserError>> {
  // Nuxt3の$fetchの実態はofetchというライブラリで実装されています
  return $fetch<ResultOk<User>>('/user', {
    method: 'POST',
    body: {
      id,
      password,
    },
  })
}
