import React from 'react';

const Landing = (): JSX.Element => {
  return (
    <div id='landing'>
      <img id='main-logo' src='./icons/logo-word.png' />
      <h1>
        ProtoNative is a React Native Prototyping Tool for mobile developers.
        With its seamless drag-and-drop interface, live code preview, and much,
        much more, ProtoNative is your all-in-one tool for all things React
        Native.
      </h1>
      <div id='downloads-container'>
        <a href='./downloads/ProtoNative-Setup-1.0.0.exe' download>
          <div className='download'>
            <div className='download-content'>
              <img src='./icons/windows-logo.png' />
              <p>Download for Windows</p>
            </div>
          </div>
        </a>
        <a href=''>
          <div className='download'>
            <div className='download-content'>
              <img src='./icons/apple-logo.png' />
              <div>
                <p>Download for Mac</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Landing;
