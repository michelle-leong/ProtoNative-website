import React from 'react';

type Props = {
  name: string;
  img: string;
  github: string;
  linkedin: string;
};

const TeamCard = ({ name, img, github, linkedin }: Props): JSX.Element => {
  return (
    <div className='team-card'>
      <img className='profile' src={img} />
      <h3>{name}</h3>
      <p>Software Engineer</p>
      <div className='links'>
        <a href={github}>
          <img src='./icons/github.svg' />
        </a>

        <a href={linkedin}>
          <img src='./icons/linkedin.svg' />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
