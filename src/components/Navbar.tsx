import React from 'react';
import { Link } from 'react-scroll';

const NavBar = (): JSX.Element => {
  return (
    <div>
      <nav>
        <img id='logo' src='./icons/logo-no-background.png' />
        <ul>
          <li>
            <Link activeClass='active' smooth spy to='features-container'>
              Getting Started
            </Link>
          </li>
          <li>
            <Link activeClass='active' smooth spy to='team-section'>
              Meet the Team
            </Link>
          </li>
          <li>
            <img className='ext-links' src='./icons/medium.svg' />
          </li>
          <li>
            <a href='https://github.com/oslabs-beta/ProtoNative'>
              <img className='ext-links' src='./icons/github.svg' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/protonative/'>
              <img className='ext-links' src='./icons/linkedin.svg' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
