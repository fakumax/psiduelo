import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { FirstColumn, SecondColumn, Wrapper } from './defaultStyles';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faDiscord,
  faFacebook,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Default = (slice) => {
  // console.log('--slice--', slice);
  const { image, description } = slice.primary;
  return (
    <Wrapper>
      <FirstColumn>
        <div className='ImageLeft'>
          <PrismicNextImage field={image} />
        </div>
        <PrismicRichText field={description} />
      </FirstColumn>
      <SecondColumn>
        {/* <>{item.columns}</>
      <>{item.text}</>
      <PrismicLink field={item.link}>Link</PrismicLink>
      <PrismicNextImage field={item.image} /> */}
        <div>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: 25, color: 'rgba(255, 255, 255, 0.5)' }}
          />

          <FontAwesomeIcon
            icon={faDiscord}
            style={{ fontSize: 25, color: 'rgba(255, 255, 255, 0.5)' }}
          />
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ fontSize: 25, color: 'rgba(255, 255, 255, 0.5)' }}
          />

          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: 25, color: 'rgba(255, 255, 255, 0.5)' }}
            size={5}
          />
          <FontAwesomeIcon
            icon={faSpotify}
            style={{ fontSize: 25, color: 'rgba(255, 255, 255, 0.5)' }}
          />
        </div>
      </SecondColumn>
    </Wrapper>
  );
};

export { Default };
