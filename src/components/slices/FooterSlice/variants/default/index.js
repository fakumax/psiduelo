import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { useState } from 'react';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionWrapper,
  BodyContainer,
  ContactInfo,
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
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Default = (slice) => {
  const { description, title, logo, imageplant } = slice.primary;
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_E164 = "+5493765529404";
  const WHATSAPP_DIGITS = WHATSAPP_E164.replace("+", "");
  return (
    <Wrapper>
      <div>
        <div>
          <BodyContainer>
            <div>
              <div>
                <PrismicNextImage field={logo} fallbackAlt="" />
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

          <AccordionWrapper>
            <AccordionItem>
              <AccordionHeader onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
                <span>Contacto</span>
                <FontAwesomeIcon icon={faChevronDown} className="chevron" />
              </AccordionHeader>
              <AccordionContent $isOpen={isOpen}>
                <ContactInfo>
                  <div className="contact-item">
                    <strong>Correo:</strong>
                    <a href="mailto:psiduelo@gmail.com">psiduelo@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <strong>Teléfono:</strong>
                    <a href={`https://wa.me/${WHATSAPP_DIGITS}`} target="_blank" rel="noopener noreferrer">
                      +54 9 376 552-9404
                    </a>
                  </div>
                  <div className="contact-item">
                    <strong>Horario de atención:</strong>
                    <span>Lunes a Viernes de 9:00 a 18:00 hs</span>
                  </div>
                  <div className="contact-item">
                    <strong>Modalidad:</strong>
                    <span>Atención Online</span>
                  </div>
                  <div className="contact-item">
                    <strong>Ubicación:</strong>
                    <span>Posadas - Misiones</span>
                  </div>
                </ContactInfo>
              </AccordionContent>
            </AccordionItem>
          </AccordionWrapper>

          <IconsGroup>
            <Link
              href={`https://wa.me/${WHATSAPP_DIGITS}`}
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
