import React from 'react';

const Landing = (): JSX.Element => {
  return (
    <div id='landing'>
      <div id='main-logo-container'>
        <div id='main-img-container'>
          <img id='main-logo' src='./icons/logo-word.png' />
        </div>
        <div id='main-logo-glow'></div>
      </div>
      <h1>
        ProtoNative is a React Native Prototyping Tool for mobile developers.
        With its seamless drag-and-drop interface, live code preview, and much,
        much more, ProtoNative is your all-in-one tool for all things React
        Native.
      </h1>
      <div id='downloads-container'>
        <a href='./downloads/ProtoNative-Setup-1.0.0.exe' download>
          <button className='download'>
            <div className='download-content'>
              <div className='download-img-container'>
                <img src='./icons/windows-logo.png' />
              </div>
              <p>Download for Windows</p>
            </div>
          </button>
        </a>
        <a href=''>
          <button className='download'>
            <div className='download-content'>
              <div className='download-img-container'>
                <img src='./icons/apple-logo.png' />
              </div>
              <p>Download for Mac</p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
