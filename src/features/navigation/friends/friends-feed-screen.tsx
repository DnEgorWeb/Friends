import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {FriendFeedContainer} from '../../friends-feed/view/friend-feed-container';
import {FriendsAPI} from '../../friends-feed/use-case/get-friends';
import {RootStackParamList} from './friends-stack';

type FriendsFeedScreenProps = {
  api: FriendsAPI;
} & NativeStackScreenProps<RootStackParamList, 'Friends Feed'>;
export function FriendsFeedScreen({navigation, api}: FriendsFeedScreenProps) {
  return (
    <FriendFeedContainer
      getFriends={api.getFriends}
      openFriend={(id: number) => {
        navigation.navigate('Friend Info', {friendId: id});
      }}
    />
  );
}
