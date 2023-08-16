import React from 'react';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import data from '../components/JSON/data.json';
import user from '../components/JSON/user.json';
import friendsData from '../components/JSON/friends.json';
import transactions from '../components/JSON/transactions.json';

export const App = () => {
  return (
    <div className="layout">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
