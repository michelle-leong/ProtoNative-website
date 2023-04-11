import React from 'react';
import TeamCard from './TeamCard';

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
      img: '../../../profiles/jonathan.jpg',
      github: 'https://github.com/jon19200',
      linkedin: 'https://linkedin.com/in/jonathanklibansky',
    },
    {
      name: 'Matthew Kymn',
      img: '../../../profiles/jonathan.jpg',
      github: 'https://github.com/mkymn10',
      linkedin: 'https://github.com/mkymn10',
    },
    {
      name: 'Michelle Leong',
      img: '../../../profiles/michelle.png',
      github: 'https://github.com/michelle-leong',
      linkedin: 'https://linkedin.com/in/michelle-w-leong',
    },
    {
      name: 'Raymond Ferrer',
      img: '../../../profiles/michelle.png',
      github: 'https://github.com/rnferrer',
      linkedin: 'https://linkedin.com/in/rnferrer',
    },
    {
      name: 'Patricia Good',
      img: '../../../profiles/patricia.png',
      github: 'https://github.com/pkg415',
      linkedin: 'https://linkedin.com/in/patricia-g415/',
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
  console.log(profileEle);

  return (
    <div id='team-section'>
      <h1>Meet the Team</h1>
      <div id='team-container'>{profileEle}</div>
    </div>
  );
};

export default Team;
