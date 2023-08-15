import React from 'react';
import style from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt={`${username}'s Avatar`}
          className={style.avatar}
        />
        <p className={style.username}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.lists}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.lists}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.lists}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
