import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { BodyContainer, IconsGroup, Wrapper } from './defaultStyles';

//Icons
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faSpotify,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Default = (slice) => {
  //console.log('--slice--Footer', slice);
  const { bgimage, description, text, logo } = slice.primary;
  return (
    <Wrapper bgimage={bgimage.url}>
      <BodyContainer>
        <PrismicNextImage field={logo} />
        <div>
          <PrismicRichText field={text} />
          <PrismicRichText field={description} />
        </div>
      </BodyContainer>
      <IconsGroup>
        <div>
          <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 30, color: '#7C5A19' }} />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: 30, color: '#7C5A19' }}
          />
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ fontSize: 30, color: '#7C5A19' }}
          />

          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 30, color: '#7C5A19' }} />
          <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 30, color: '#7C5A19' }} />
          <FontAwesomeIcon icon={faSpotify} style={{ fontSize: 30, color: '#7C5A19' }} />
        </div>
      </IconsGroup>
    </Wrapper>
  );
};

export { Default };
