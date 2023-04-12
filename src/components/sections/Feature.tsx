import React from 'react';

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
        <div className='feature-text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ) : null}
      <img className={className} src={img} />
      {index % 2 === 1 ? (
        <div className='feature-text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Feature;
