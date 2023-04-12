import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
  index: number;
  title: string;
  description: string;
  img: string;
  gif: boolean;
};

const Feature = ({
  index,
  title,
  description,
  img,
  gif,
}: Props): JSX.Element => {
  const className = gif ? 'gif' : 'picture';
  return (
    <div className='feature'>
      {index % 2 === 0 ? (
        <Fade direction='left'>
          <div className='feature-text'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Fade>
      ) : null}
      <img className={className} src={img} />
      {index % 2 === 1 ? (
        <Fade direction='right'>
          <div className='feature-text'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Fade>
      ) : null}
    </div>
  );
};

export default Feature;
