import React, {useEffect} from 'react';
import {
  Alert,
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';

export type FriendData = {
  name?: string;
  imageURL?: string;
  bio?: string;
  episodesCount?: number;
  sex?: string;
};

export type FriendScreenProps = FriendData & {
  loading: boolean;
  loadingError: string | null;
};

export const FriendInfoScreen = ({
  loading,
  loadingError,
  name,
  imageURL,
  bio,
  episodesCount,
  sex,
}: FriendScreenProps) => {
  useEffect(() => {
    if (loadingError !== null) {
      Alert.alert(loadingError);
    }
  }, [loadingError]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: imageURL}} style={styles.friendImage} />
      <Text style={styles.friendName}>{name}</Text>
      <Text style={styles.friendBio}>{bio}</Text>
      <Text style={styles.friendNumberOfEpisodes}>{episodesCount}</Text>
      <Text style={styles.friendSex}>{sex}</Text>
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
  friendNumberOfEpisodes: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
  friendSex: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
});
