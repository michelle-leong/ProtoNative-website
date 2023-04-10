import React from 'react';
import GettingStarted from './sections/GettingStarted';
import Main from './sections/Main';
import Team from './sections/Team';

const MainContainer = (): JSX.Element => {
  return (
    <div id='main-container'>
      <Main />
      <GettingStarted />
      <Team />
    </div>
  );
};

export default MainContainer;
