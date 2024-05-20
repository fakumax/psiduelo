import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import {
  BodyContainer,
  IconsGroup,
  Wrapper,
  Icon,
  Frase,
  ContainerImagePlant,
  Details,
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
  console.log('--slice--Footer', slice);
  const { description, text, logo, imageplant, papertop, paperbottom } = slice.primary;
  console.log('papertop', papertop);
  console.log('paperl', paperbottom);
  return (
    <Wrapper>
      <div>
        {/* <div>
          <PrismicNextImage field={papertop} />
        </div> */}
        <div>
          <BodyContainer>
            <div>
              <div>
                <PrismicNextImage field={logo} />
              </div>
              <ContainerImagePlant>
                <PrismicNextImage field={imageplant} />
              </ContainerImagePlant>
            </div>

            <Details>
              <PrismicRichText field={text} />
              <PrismicRichText field={description} />
            </Details>
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
        </div>
        {/* <div>
          <PrismicNextImage field={paperbottom} />
        </div> */}
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
