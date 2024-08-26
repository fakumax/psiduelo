import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import {
  BodyContainer,
  ContainerImagePlant,
  Details,
  Frase,
  Icon,
  IconsGroup,
  Wrapper,
} from './defaultStyles';

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
  const { description, title, logo, imageplant } = slice.primary;

  return (
    <Wrapper>
      <div>
        <div>
          <BodyContainer>
            <div>
              <div>
                <PrismicNextImage field={logo} />
              </div>
              <ContainerImagePlant>
                <PrismicNextImage field={imageplant} fallbackAlt="" />
              </ContainerImagePlant>
            </div>

            <Details>
              <PrismicRichText field={title} />
              <PrismicRichText field={description} />
            </Details>
          </BodyContainer>
          <IconsGroup>
            <Link
              href="https://wa.me/5493764847080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={faWhatsapp} />
            </Link>
            <Icon icon={faInstagram} />
            <Icon icon={faFacebookF} />
            <Link href="mailto:psiduelo@gmail.com">
              <Icon icon={faEnvelope} />
            </Link>
            <Icon icon={faDiscord} />
            <Link href="https://open.spotify.com/playlist/1yC7MAXP13XN1kcVC8PlE6?si=6bd0feb4da69407b">
              <Icon icon={faSpotify} />
            </Link>
          </IconsGroup>
        </div>
      </div>

      <Frase>
        <p>
          &quot;Algunas veces solíamos hablar de iniciar una familia... pero es que...
          nuestra familia ya había iniciado...&quot;
        </p>
        <span>Para Charís</span>
      </Frase>
    </Wrapper>
  );
};

export { Default };
