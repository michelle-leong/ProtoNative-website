import React from 'react';
import { Link } from 'react-scroll';

const NavBar = (): JSX.Element => {
  return (
    <div>
      <nav>
        <img id='logo' src='./icons/logo-icon.png' />
        <ul>
          <li>
            <Link activeClass='active' smooth spy to='getting-started'>
              Getting Started
            </Link>
          </li>
          <li>
            <Link activeClass='active' to='team'>
              Meet the Team
            </Link>
          </li>
          <li>
            <img className='ext-links' src='./icons/github.png' />
          </li>
          <li>
            <img className='ext-links' src='./icons/linkedin.png' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
