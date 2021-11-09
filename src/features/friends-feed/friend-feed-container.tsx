import React, {useEffect, useState, useCallback} from 'react';

import {FriendFeedScreen} from './friend-feed-screen';
import {FriendsAPI} from './friends-api';
import {Friend} from './friend';

type Props = {
  api: FriendsAPI;
  openFriend: (friend: Friend) => void;
};

export const FriendFeedContainer = ({api, openFriend}: Props) => {
  const [friendsLoading, setFriendsLoading] = useState(false);
  const [friends, setFriends] = useState<Friend[] | null>(null);
  const [friendsError, setFriendsError] = useState<string | null>(null);

  const loadFriends = useCallback(() => {
    setFriendsLoading(true);
    api
      .getFriends()
      .then(setFriends)
      .catch(err => {
        setFriendsError(err);
        setFriends(null);
      })
      .finally(() => setFriendsLoading(false));
  }, [api]);

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
