export enum HTTPClientError {
  connectivity,
  invalidData,
}

export class HTTPClientResult<T> {
  private readonly data: T | HTTPClientError;

  constructor(data?: T, error?: HTTPClientError) {
    if (data) {
      this.data = data;
    } else {
      this.data = error as HTTPClientError;
    }
  }

  get result(): T | HTTPClientError {
    return this.data;
  }
}
