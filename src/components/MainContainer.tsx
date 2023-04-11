import React from 'react';
import FeatureList from './sections/FeatureList';
import Landing from './sections/Landing';
import Team from './sections/Team';

const MainContainer = (): JSX.Element => {
  return (
    <div id='main-container'>
      <Landing />
      <FeatureList />
      <Team />
    </div>
  );
};

export default MainContainer;
