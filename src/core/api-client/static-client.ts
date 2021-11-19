import {HTTPClient} from '../../features/http-client/http-client';
import {
  HTTPClientResult,
  HTTPClientError,
} from '../../features/http-client/http-client-result';

export class StaticClient implements HTTPClient {
  returnData: unknown;

  constructor(returnData: unknown) {
    this.returnData = returnData;
  }

  async get<T>(): Promise<HTTPClientResult<T>> {
    const randomNumber = Math.random();
    return new Promise(res => {
      setTimeout(() => {
        if (randomNumber <= 0.5) {
          const errorResult = new HTTPClientResult<T>(
            undefined,
            HTTPClientError.connectivity,
          );
          res(errorResult);
        } else {
          res(new HTTPClientResult(this.returnData as T, undefined));
        }
      }, 1000);
    });
  }
}
