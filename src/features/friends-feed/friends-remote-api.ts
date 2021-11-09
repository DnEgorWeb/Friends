import {FriendsAPI} from './friends-api';
import {FRIENDS} from './fixtures';
import {Friend} from './friend';

export class FriendsRemoteAPI extends FriendsAPI {
  // Immitates network request. Sometimes throws connection error.
  getFriends(): Promise<Friend[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.2) {
          rej('Connection Errror');
        }
        res(FRIENDS);
      }, 2000);
    });
  }
}
