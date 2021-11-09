import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

type Props = {
  firstName: string;
  lastName: string;
  imageURL: string;
  bio: string;
};

export const FriendInfoScreen = ({
  firstName,
  lastName,
  imageURL,
  bio,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageURL}} style={styles.friendImage} />
      <Text style={styles.friendName}>
        {firstName} {lastName}
      </Text>
      <Text style={styles.friendBio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  friendImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  friendName: {
    fontSize: 16,
  },
  friendBio: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
});
