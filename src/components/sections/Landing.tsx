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
        <div className='download'>
          <div className='download-content'>
            <img src='./icons/apple-logo.png' />
            <div>
              <p>Download for Mac</p>
              <div id='download-links'>
                <a href='./downloads/ProtoNative-1.0.0-arm64.dmg' download>
                  <span>Apple Chip</span>
                </a>
                <a href='./downloads/ProtoNative-1.0.0-intel.dmg' download>
                  <span>Intel Chip</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
