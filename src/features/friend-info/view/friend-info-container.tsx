import React, {useEffect, useState, useCallback} from 'react';

import {FriendInfoScreen, FriendData} from './friend-info-screen';
import {Friend} from '../domain/friend';

type Props = {
  getFriend: () => Promise<Friend>;
};

const mapFriendsToFriendsUIData = (friend: Friend): FriendData => ({
  name: `${friend.firstName} ${friend.lastName}`,
  bio: friend.description,
  episodesCount: friend.numberOfEpisodes,
  imageURL: friend.imageURL,
  sex: friend.gender,
});

export const FriendInfoContainer = ({getFriend}: Props) => {
  const [friendLoading, setFriendLoading] = useState(false);
  const [friend, setFriend] = useState<FriendData | null>(null);
  const [friendError, setFriendError] = useState<string | null>(null);

  const loadFriend = useCallback(() => {
    setFriendLoading(true);
    getFriend()
      .then(friendResult => {
        const friendsData = mapFriendsToFriendsUIData(friendResult);
        setFriend(friendsData);
      })
      .catch(err => {
        setFriendError(err);
        setFriend(null);
      })
      .finally(() => setFriendLoading(false));
  }, [getFriend]);

  useEffect(() => {
    loadFriend();
  }, [loadFriend]);

  return (
    <FriendInfoScreen
      name={(friend as FriendData).name}
      bio={(friend as FriendData).bio}
      episodesCount={(friend as FriendData).episodesCount}
      imageURL={(friend as FriendData).imageURL}
      sex={(friend as FriendData).sex}
      loading={friendLoading}
      loadingError={friendError}
    />
  );
};
