import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FriendFeedContainer} from '../../features/friends-feed/view/friend-feed-container';
import {FriendInfoContainer} from '../../features/friend-info/view/friend-info-container';
import {FriendsAPI} from '../../features/friends-feed/use-case/get-friends';
import {FriendAPI} from '../../features/friend-info/use-case/get-friend-info';

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
        {props => (
          <FriendFeedContainer
            getFriends={friendsAPI.getFriends}
            openFriend={(id: number) => {
              props.navigation.navigate('Friend Info', {friendId: id});
            }}
          />
        )}
      </FriendsStack.Screen>
      <FriendsStack.Screen name="Friend Info">
        {props => {
          const {friendId} = props.route.params;
          return (
            <FriendInfoContainer
              friendId={friendId}
              getFriend={friendAPI.getFriend}
            />
          );
        }}
      </FriendsStack.Screen>
    </FriendsStack.Navigator>
  );
}
