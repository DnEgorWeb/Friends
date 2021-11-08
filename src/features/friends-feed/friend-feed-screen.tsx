import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Friend} from './friend';

type Props = {
  friends: Friend[];
  isLoading: boolean;
  handleFriendPress: (friend: Friend) => void;
};

export const FriendFeedScreen = ({
  friends,
  isLoading,
  handleFriendPress,
}: Props) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={friends}
      style={styles.friendListContainer}
      ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
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
    paddingVertical: 20,
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
