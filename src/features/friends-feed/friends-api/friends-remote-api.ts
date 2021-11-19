import {Friend} from '../domain/friend';
import {FriendsAPI} from '../use-case/get-friends';
import {HTTPClient} from '../../http-client/http-client';
import {HTTPClientError} from '../../http-client/http-client-result';

export enum RemoteAPIErrors {
  connectivity = 'Failed to make a request',
  invalidData = 'Something wrong with data from the server',
}

export class FriendsRemoteAPI extends FriendsAPI {
  private client: HTTPClient;
  private url: string;

  constructor(client: HTTPClient, url: string) {
    super();
    this.client = client;
    this.url = url;
  }

  getFriends = async (): Promise<Friend[]> => {
    const friendsResult = await this.client.get<Friend[]>(this.url);
    if (friendsResult.result instanceof Array) {
      return friendsResult.result;
    } else {
      switch (friendsResult.result) {
        case HTTPClientError.connectivity:
          throw new Error(RemoteAPIErrors.connectivity);
        case HTTPClientError.invalidData:
          throw new Error(RemoteAPIErrors.invalidData);
        default:
          throw new Error('Not supported error type');
      }
    }
  };
}
