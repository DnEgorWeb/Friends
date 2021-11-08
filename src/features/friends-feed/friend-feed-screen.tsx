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
    flex: 1,
    backgroundColor: 'lightgrey',
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
    marginLeft: 15,
  },
  friendName: {
    fontSize: 16,
  },
  friendDescription: {
    fontSize: 14,
    color: 'lightgrey',
  },
});
