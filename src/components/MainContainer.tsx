import React from 'react';
import GettingStarted from './sections/GettingStarted';
import Landing from './sections/Landing';
import Team from './sections/Team';

const MainContainer = (): JSX.Element => {
  return (
    <div id='main-container'>
      <Landing />
      <GettingStarted />
      <Team />
    </div>
  );
};

export default MainContainer;
