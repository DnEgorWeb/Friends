import {HTTPClient} from '../../features/http-client/http-client';
import {
  HTTPClientResult,
  HTTPClientError,
} from '../../features/http-client/http-client-result';

export class APIClient implements HTTPClient {
  async get<T>(url: string): Promise<HTTPClientResult<T>> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      try {
        const jsonResult: HTTPClientResult<T> = await response.json();
        return jsonResult;
      } catch (err) {
        return new HTTPClientResult<T>(undefined, HTTPClientError.invalidData);
      }
    } catch (err) {
      return new HTTPClientResult<T>(undefined, HTTPClientError.connectivity);
    }
  }
}
