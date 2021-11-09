import {Friend} from '../domain/friend';
import {FriendAPI} from '../friend-api/friend-api';
import {FriendError} from './friend-error';

type FriendResult = Friend | FriendError;

export function getFriendInfo(
  api: FriendAPI,
  friendId: number,
): Promise<FriendResult> {
  return api.getFriend(friendId);
}
