import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {FriendsRemoteAPI} from './src/features/friends-feed/friends-api/friends-remote-api';
import {FriendRemoteAPI} from './src/features/friend-info/friend-api/friend-remote-api';
import {createFriendsStack} from './src/core/navigation/friends-stack';

const friendsRemoteAPI = new FriendsRemoteAPI();
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
