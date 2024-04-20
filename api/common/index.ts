export const RESULT_TYPE = {
  Ok: true,
  Error: false,
} as const

export interface ResultOk<T> {
  ok: (typeof RESULT_TYPE)['Ok']
  data: T
}
export interface ResultError<T> {
  ok: (typeof RESULT_TYPE)['Error']
  status: number
  data: T
}
