import React, {useEffect, useState, useCallback} from 'react';

import {FriendFeedScreen, FriendData} from './friend-feed-screen';
import {Friend} from '../domain/friend';

type Props = {
  getFriends: () => Promise<Friend[]>;
  openFriend: (friendId: number) => void;
};

const mapFriendsToFriendsUIData = (friends: Friend[]): FriendData[] => {
  return friends.map(friend => ({
    id: friend.id,
    name: `${friend.firstName} ${friend.lastName}`,
    imageURL: friend.imageURL,
    description: friend.description,
  }));
};

export const FriendFeedContainer = ({getFriends, openFriend}: Props) => {
  const [friendsLoading, setFriendsLoading] = useState(false);
  const [friends, setFriends] = useState<FriendData[] | null>(null);
  const [friendsError, setFriendsError] = useState<string | null>(null);

  const loadFriends = useCallback(() => {
    setFriendsLoading(true);
    getFriends()
      .then(friendsResult => {
        const friendsData = mapFriendsToFriendsUIData(friendsResult);
        setFriends(friendsData);
        setFriendsError(null);
      })
      .catch(err => {
        setFriendsError(err.toString());
        setFriends(null);
      })
      .finally(() => setFriendsLoading(false));
  }, [getFriends]);

  useEffect(() => {
    loadFriends();
  }, [loadFriends]);

  const handleFriendPress = (friend: FriendData) => {
    openFriend(friend.id);
  };

  return (
    <FriendFeedScreen
      friends={friends}
      isLoading={friendsLoading}
      loadingError={friendsError}
      handleFriendPress={handleFriendPress}
      handleFriendsReload={loadFriends}
    />
  );
};
