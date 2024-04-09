export type UserType = 'admin' | 'general'
export interface User {
  id: string
  name: string
  email: string
  provider: string
  type: UserType
}
export const getUser = async (id: string, password: string) => {
  // $fetchの実態はofetchというライブラリで実装されています
  return $fetch<User>('/user', {
    method: 'POST',
    body: {
      id,
      password,
    },
  }).catch((err: { status: number; data: { message: string } }) => {
    return err.data
  })
}
