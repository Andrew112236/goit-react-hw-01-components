import React from 'react';
import style from '../FriendList/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={style.item}>
    <span className={style.isOnline}>{isOnline ? 'Online' : 'Offline'}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

export default FriendListItem;
