import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {FriendsRemoteAPI} from './src/features/friends-feed/friends-api/friends-remote-api';
import {FriendRemoteAPI} from './src/features/friend-info/friend-api/friend-remote-api';
import {createFriendsStack} from './src/core/navigation/friends-stack';
import {StaticClient} from './src/core/api-client/static-client';
import {FRIENDS} from './src/core/api-client/fixtures';

const apiClient = new StaticClient(FRIENDS);

const friendsRemoteAPI = new FriendsRemoteAPI(
  apiClient,
  'http://awesome-friends.com/api/friends-list',
);
const friendRemoteAPI = new FriendRemoteAPI();

const friendsStack = createFriendsStack(friendsRemoteAPI, friendRemoteAPI);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {friendsStack}
    </NavigationContainer>
  );
};

export default App;
