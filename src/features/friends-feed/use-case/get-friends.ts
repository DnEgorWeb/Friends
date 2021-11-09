import {FriendsAPI} from '../friends-api/friends-api';
import {Friend} from '../domain/friend';

type FriendsResult = Friend[];

export function getFriends(api: FriendsAPI): Promise<FriendsResult> {
  return api.getFriends().catch(err => err);
}
