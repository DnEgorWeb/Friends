import {HTTPClientResult} from './http-client-result';

export interface HTTPClient {
  get<T>(url: string): Promise<HTTPClientResult<T>>;
}
