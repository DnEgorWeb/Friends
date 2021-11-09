import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import {FriendFeedContainer} from './src/features/friends-feed/view/friend-feed-container';
import {FriendsRemoteAPI} from './src/features/friends-feed/friends-api/friends-remote-api';

const friendsRemoteAPI = new FriendsRemoteAPI();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FriendFeedContainer
        getFriends={friendsRemoteAPI.getFriends}
        openFriend={(id: number) => {
          console.log(id);
          throw new Error('Not Implemented');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
