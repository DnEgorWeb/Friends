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
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={({item: friend}) => (
          <TouchableOpacity
            onPress={() => handleFriendPress(friend)}
            key={friend.id}
            style={styles.friendContainer}>
            <Image
              source={friend.imageURL as ImageSourcePropType}
              style={styles.friendImage}
            />
            <View>
              <Text>
                {friend.firstName} {friend.lastName}
              </Text>
              <Text>{friend.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});
