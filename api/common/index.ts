export interface ResultOk<T> {
  kind: ResultType.Ok;
  data: T;
}
export interface ResultError<T> {
  kind: ResultType.Err;
  status: number;
  data: T;
}
export const enum ResultType {
  Ok = "Ok", 
  Err = "Err", 
}
