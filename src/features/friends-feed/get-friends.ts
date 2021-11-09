import {FriendsAPI} from './friends-api';
import {Friend} from './friend';

type FriendsResult = Friend[] | string;

export function getFriends(api: FriendsAPI): Promise<FriendsResult> {
  return api.getFriends().catch(err => err);
}
