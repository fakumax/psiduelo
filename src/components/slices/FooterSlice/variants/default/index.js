import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { BodyContainer, IconsGroup, Wrapper, Icon } from './defaultStyles';

//Icons
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faSpotify,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
          <Icon icon={faWhatsapp} />
          <Icon icon={faInstagram} />
          <Icon icon={faFacebookF} />
          <Icon icon={faEnvelope} />
          <Icon icon={faDiscord} />
          <Icon icon={faSpotify} />
        </div>
      </IconsGroup>
    </Wrapper>
  );
};

export { Default };
