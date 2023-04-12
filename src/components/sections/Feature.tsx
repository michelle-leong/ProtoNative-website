import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
  title: string;
  description: string;
  img: string;
};

const Feature = ({ title, description, img }: Props): JSX.Element => {
  return (
    <div className='feature'>
      <Fade damping={.8} >
        <div className='feature-text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={img} />

      </Fade>
    </div>
  );
};

export default Feature;
