import React from 'react';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import data from '../components/JSON/data.json';
import user from '../components/JSON/user.json';

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
    </div>
  );
};
