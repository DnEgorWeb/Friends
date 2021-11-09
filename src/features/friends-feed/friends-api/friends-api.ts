import {Friend} from '../domain/friend';

export abstract class FriendsAPI {
  public abstract getFriends(): Promise<Friend[]>;
}
