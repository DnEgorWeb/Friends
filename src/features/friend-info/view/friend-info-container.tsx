import React, {useEffect, useState, useCallback} from 'react';

import {FriendInfoScreen, FriendData} from './friend-info-screen';
import {Friend} from '../domain/friend';
import {FriendResult} from '../use-case/get-friend-info';

type Props = {
  friendId: number;
  getFriend: (id: number) => Promise<FriendResult>;
};

const mapFriendsToFriendsUIData = (friend: Friend): FriendData => ({
  name: `${friend.firstName} ${friend.lastName}`,
  bio: friend.description,
  episodesCount: friend.numberOfEpisodes,
  imageURL: friend.imageURL,
  sex: friend.gender,
});

export const FriendInfoContainer = ({friendId, getFriend}: Props) => {
  const [friendLoading, setFriendLoading] = useState(false);
  const [friend, setFriend] = useState<FriendData | null>(null);
  const [friendError, setFriendError] = useState<string | null>(null);

  const loadFriend = useCallback(() => {
    setFriendLoading(true);
    getFriend(friendId)
      .then(friendResult => {
        const friendsData = mapFriendsToFriendsUIData(friendResult as Friend);
        setFriend(friendsData);
      })
      .catch(err => {
        setFriendError(err);
        setFriend(null);
      })
      .finally(() => setFriendLoading(false));
  }, [getFriend, friendId]);

  useEffect(() => {
    loadFriend();
  }, [loadFriend]);

  return (
    <FriendInfoScreen
      name={friend?.name}
      bio={friend?.bio}
      episodesCount={friend?.episodesCount}
      imageURL={friend?.imageURL}
      sex={friend?.sex}
      loading={friendLoading}
      loadingError={friendError}
    />
  );
};
