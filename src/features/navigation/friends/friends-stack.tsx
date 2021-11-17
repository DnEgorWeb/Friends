import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FriendsAPI} from '../../friends-feed/use-case/get-friends';
import {FriendAPI} from '../../friend-info/use-case/get-friend-info';
import {FriendsFeedScreen} from './friends-feed-screen';
import {FriendInfoScreen} from './friend-info-screen';

export type RootStackParamList = {
  'Friends Feed': undefined;
  'Friend Info': {friendId: number};
};

export function createFriendsStack(
  friendsAPI: FriendsAPI,
  friendAPI: FriendAPI,
) {
  const FriendsStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen name="Friends Feed">
        {props => <FriendsFeedScreen {...props} api={friendsAPI} />}
      </FriendsStack.Screen>
      <FriendsStack.Screen name="Friend Info">
        {props => <FriendInfoScreen {...props} api={friendAPI} />}
      </FriendsStack.Screen>
    </FriendsStack.Navigator>
  );
}
