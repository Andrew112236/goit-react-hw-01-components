import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from '../FriendList/FriendListItem.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friend_list}>
    {friends.map((friend, index) => (
      <FriendListItem
        key={index}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
