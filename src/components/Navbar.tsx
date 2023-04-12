import React from 'react';
import { Link } from 'react-scroll';

const NavBar = (): JSX.Element => {

  const removeMenu = () => {
    document.getElementById("checkbox").click();
  }

  return (
    <div>
      <nav>
        <img id='logo-icon' src='./icons/logo-icon.png'/>
        <div id='logo-container'>
          <img id='logo' src='./icons/logo-no-background.png' />
        </div>
        <input id='checkbox' type='checkbox' name='' />      
          <div className='hamburger-lines'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>
        <ul id='menu-items'>
          <li>
            <Link onClick={removeMenu} smooth spy={true} to='features-container' offset={-80} style={{textDecoration: 'none'}}>
              Features
            </Link>
          </li>
          <li>
            <Link onClick={removeMenu} activeClass='active' smooth spy to='team-section' offset={-80} style={{textDecoration: 'none'}}>
              Meet the Team
            </Link>
          </li>
          <div id='ext-links-container'>
            <li>
              <a href='https://medium.com/@patriciagood415/protonative-a-dynamic-react-native-prototyping-tool-fb205ea93615'>
                <img className='ext-links' src='./icons/medium.svg' />
              </a>
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
