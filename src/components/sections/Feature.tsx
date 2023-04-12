import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
  index: number;
  title: string;
  description: string;
  img: string;
  gif: boolean;
};

const Feature = ({
  index,
  title,
  description,
  img,
  gif,
}: Props): JSX.Element => {
  const className = gif ? 'gif' : 'picture';
  return (
    <div className='feature'>
      {index % 2 === 0 ? (
        <div>
          <Fade direction='left' className='phone-screen-animation'>
            <div id='feature-title-desc' className='feature-text'>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </Fade>
          <div className='phone-screen-no-animation'>
            <div id='feature-title-desc' className='feature-text'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
          </div>

        </div>
      ) : null}
      <img id='gif' className={className} src={img} />
      {index % 2 === 1 ? (
        <div>
          <Fade direction='right' className='phone-screen-animation'>
            <div className='feature-text'>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </Fade>
          <div className='phone-screen-no-animation'>
            <div className='feature-text'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Feature;
