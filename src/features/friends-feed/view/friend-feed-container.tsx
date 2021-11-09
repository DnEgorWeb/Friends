import React, {useEffect, useState, useCallback} from 'react';

import {FriendFeedScreen} from './friend-feed-screen';
import {Friend} from '../domain/friend';

type Props = {
  getFriends: () => Promise<Friend[]>;
  openFriend: (friend: Friend) => void;
};

export const FriendFeedContainer = ({getFriends, openFriend}: Props) => {
  const [friendsLoading, setFriendsLoading] = useState(false);
  const [friends, setFriends] = useState<Friend[] | null>(null);
  const [friendsError, setFriendsError] = useState<string | null>(null);

  const loadFriends = useCallback(() => {
    setFriendsLoading(true);
    getFriends()
      .then(setFriends)
      .catch(err => {
        setFriendsError(err);
        setFriends(null);
      })
      .finally(() => setFriendsLoading(false));
  }, [getFriends]);

  useEffect(() => {
    loadFriends();
  }, [loadFriends]);

  return (
    <FriendFeedScreen
      friends={friends}
      isLoading={friendsLoading}
      loadingError={friendsError}
      handleFriendPress={openFriend}
      handleFriendsReload={loadFriends}
    />
  );
};
