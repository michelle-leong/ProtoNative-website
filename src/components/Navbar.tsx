import React from 'react';
import { Link } from 'react-scroll';

const NavBar = (): JSX.Element => {
  return (
    <div>
      <nav>
        <img id='logo-icon' src='./icons/logo-icon.png'/>
        <div id='logo-container'>
          <img id='logo' src='./icons/logo-no-background.png' />
        </div>
        <input className='checkbox' type='checkbox' name='' id='' />      
          <div className='hamburger-lines'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>
        <ul id='menu-items'>
          <li>
            <Link smooth spy={true} to='features-container' style={{textDecoration: 'none'}}>
              Features
            </Link>
          </li>
          <li>
            <Link activeClass='active' smooth spy to='team-section' style={{textDecoration: 'none'}}>
              Meet the Team
            </Link>
          </li>
          <div id='ext-links-container'>
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
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
