import React from 'react';
import TeamCard from './TeamCard';
import { Fade } from 'react-awesome-reveal';

type profileObj = {
  name: string;
  img: string;
  github: string;
  linkedin: string;
};

const Team = (): JSX.Element => {
  const profiles: profileObj[] = [
    {
      name: 'Jonathan Klibansky',
      img: './profiles/jonathan.jpg',
      github: 'https://github.com/jon19200',
      linkedin: 'https://linkedin.com/in/jonathanklibansky',
    },
    {
      name: 'Matthew Kymn',
      img: './profiles/matt.png',
      github: 'https://github.com/mkymn10',
      linkedin: 'https://www.linkedin.com/in/matthew-kymn',
    },
    {
      name: 'Michelle Leong',
      img: './profiles/michelle.png',
      github: 'https://github.com/michelle-leong',
      linkedin: 'https://linkedin.com/in/michelle-w-leong',
    },
    {
      name: 'Raymond Ferrer',
      img: './profiles/raymond.jpg',
      github: 'https://github.com/rnferrer',
      linkedin: 'https://linkedin.com/in/raymond-ferrer',
    },
    {
      name: 'Patricia Good',
      img: './profiles/patricia.png',
      github: 'https://github.com/pkg415',
      linkedin: 'https://www.linkedin.com/in/patricia-good',
    },
  ];

  const profileEle = profiles.map((person, idx) => {
    return (
      <TeamCard
        key={idx}
        name={person.name}
        img={person.img}
        github={person.github}
        linkedin={person.linkedin}
      />
    );
  });

  return (
    <div id='team-section'>
      <Fade cascade>
        <h1>Meet the Team</h1>
        <div id='team-container'>{profileEle}</div>
      </Fade>
    </div>
  );
};

export default Team;
