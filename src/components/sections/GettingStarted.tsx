import React from 'react';
import Feature from './Feature';

type featureObj = {
  title: string;
  description: string;
  img: string;
};

const GettingStarted = (): JSX.Element => {
  const features: featureObj[] = [
    { title: 'Add', description: 'xyz', img: 'xyz' },
  ];

  const featureEle = features.map((feat, idx) => {
    return (
      <Feature
        key={idx}
        title={feat.title}
        description={feat.description}
        img={feat.img}
      />
    );
  });

  return (
    <div id='features-container'>
      <h1>Features</h1>
      {featureEle}
    </div>
  );
};

export default GettingStarted;
