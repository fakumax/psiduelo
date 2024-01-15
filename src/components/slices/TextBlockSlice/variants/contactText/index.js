import React from 'react';

import { Container, ContainerImage, Wrapper } from './defaultStyles.js';
import { ContactForm } from '@/components/ResendEmail/ContactForm.jsx';
import { PrismicNextImage } from '@prismicio/next';

const ContactText = (slice) => {
  console.log('image', slice.primary);
  return (
    <Wrapper>
      <Container>
        <ContainerImage>
          <PrismicNextImage
            field={slice.primary.image}
            alt={slice.primary.image.alt || 'Imagen de contacto'}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
          />
        </ContainerImage>
        <ContactForm text={slice.primary} />
      </Container>
    </Wrapper>
  );
};

export { ContactText };
