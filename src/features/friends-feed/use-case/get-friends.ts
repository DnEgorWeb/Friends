import {FriendsAPI} from '../friends-api/friends-api';
import {Friend} from '../domain/friend';

export function getFriends(api: FriendsAPI): Promise<Friend[]> {
  return api.getFriends();
}
