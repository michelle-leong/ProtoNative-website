import React from 'react';

const Main = (): JSX.Element => {
  return (
    <div id='main'>
      <img id='main-logo' src='./icons/logo-word.png' />
      <p>something something blahblah</p>
      <div id='downloads-container'>
        <div className='download'>
          <img src='./icons/windows-logo.png' />
          <p>Download for Windows</p>
        </div>
        <div className='download'>
          <img src='./icons/apple-logo.png' />
          <p>Download for Mac</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
