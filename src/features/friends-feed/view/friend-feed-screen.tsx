import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

import {Friend} from '../domain/friend';

type Props = {
  friends: Friend[] | null;
  isLoading: boolean;
  loadingError: string | null;
  handleFriendPress: (friend: Friend) => void;
  handleFriendsReload: () => void;
};

export const FriendFeedScreen = ({
  friends,
  isLoading,
  loadingError,
  handleFriendPress,
  handleFriendsReload,
}: Props) => {
  const loadedFriends = useRef(false);

  useEffect(() => {
    if (loadingError !== null) {
      Alert.alert(loadingError);
    }
  }, [loadingError]);

  useEffect(() => {
    if (friends !== null) {
      loadedFriends.current = true;
    }
  }, [friends]);

  if (isLoading && !loadedFriends) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={friends ?? []}
      style={styles.friendListContainer}
      ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
      onRefresh={handleFriendsReload}
      refreshing={isLoading}
      renderItem={({item: friend}) => (
        <TouchableOpacity
          onPress={() => handleFriendPress(friend)}
          key={friend.id}
          style={styles.friendContainer}>
          <Image source={{uri: friend.imageURL}} style={styles.friendImage} />
          <View style={styles.friendDataContainer}>
            <Text style={styles.friendName}>
              {friend.firstName} {friend.lastName}
            </Text>
            <Text style={styles.friendDescription}>{friend.description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  friendListContainer: {
    flexGrow: 1,
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
  },
  friendContainer: {
    flexDirection: 'row',
  },
  friendImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  friendDataContainer: {
    marginLeft: 25,
    paddingTop: 5,
    flex: 1,
  },
  friendName: {
    fontSize: 16,
  },
  friendDescription: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
  listSeparator: {
    height: 20,
  },
});
