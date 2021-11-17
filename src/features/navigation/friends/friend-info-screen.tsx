import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {FriendInfoContainer} from '../../friend-info/view/friend-info-container';
import {FriendAPI} from '../../friend-info/use-case/get-friend-info';
import {RootStackParamList} from './friends-stack';

type FriendInfoScreenProps = {
  api: FriendAPI;
} & NativeStackScreenProps<RootStackParamList, 'Friend Info'>;
export function FriendInfoScreen({route, api}: FriendInfoScreenProps) {
  const {friendId} = route.params;
  return <FriendInfoContainer friendId={friendId} getFriend={api.getFriend} />;
}
