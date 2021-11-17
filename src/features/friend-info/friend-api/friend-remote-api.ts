import {FriendAPI} from '../use-case/get-friend-info';
import {FriendError} from '../use-case/friend-error';
import {FriendResult} from '../use-case/get-friend-info';
import {FRIENDS_MAP} from '../fixtures';

export class FriendRemoteAPI extends FriendAPI {
  // Immitates network request. Sometimes throws not found error.
  getFriend(id: number): Promise<FriendResult> {
    return new Promise(res => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.2) {
          res(new FriendError('No friend found!'));
        }
        res(FRIENDS_MAP[id]);
      }, 2000);
    });
  }
}
