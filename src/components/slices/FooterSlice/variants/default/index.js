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
import Link from 'next/link';

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
        <Icon icon={faWhatsapp} />
        <Icon icon={faInstagram} />
        <Icon icon={faFacebookF} />
        <Link href="mailto:destinatario@example.com">
          <Icon icon={faEnvelope} />
        </Link>
        <Icon icon={faDiscord} />
        <Link href="https://open.spotify.com/playlist/1yC7MAXP13XN1kcVC8PlE6?si=6bd0feb4da69407b">
          <Icon icon={faSpotify} />
        </Link>
      </IconsGroup>
    </Wrapper>
  );
};

export { Default };
