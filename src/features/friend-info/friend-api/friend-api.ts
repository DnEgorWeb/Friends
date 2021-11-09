import {FriendResult} from '../use-case/get-friend-info';

export abstract class FriendAPI {
  public abstract getFriend(friendId: number): Promise<FriendResult>;
}
