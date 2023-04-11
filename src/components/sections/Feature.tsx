import React from 'react';

type Props = {
  title: string;
  description: string;
  img: string;
};

const Feature = ({ title, description, img }: Props): JSX.Element => {
  return (
    <div>
      <div className='feature-text'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* <img src={img} */}
    </div>
  );
};

export default Feature;
