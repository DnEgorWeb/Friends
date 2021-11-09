import {Friend} from './friend';

export abstract class FriendsAPI {
  public abstract getFriends(): Promise<Friend[]>;
}
