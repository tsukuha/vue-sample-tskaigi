export interface ResultOk<T> {
  ok: true
  data: T
}
export interface ResultError<T> {
  ok: false
  status: number
  data: T
}
