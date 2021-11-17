import {Friend} from '../domain/friend';
import {FriendError} from './friend-error';

export type FriendResult = Friend | FriendError;

export abstract class FriendAPI {
  public abstract getFriend(friendId: number): Promise<FriendResult>;
}
