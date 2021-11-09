import {Friend} from '../domain/friend';

export abstract class FriendAPI {
  public abstract getFriend(friendId: number): Promise<Friend>;
}
