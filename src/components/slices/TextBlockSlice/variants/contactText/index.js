import React from 'react';

import {
  Container,
  ContainerImage,
  Wrapper,
  ContainerImageBorder,
} from './defaultStyles.js';
import { ContactForm } from '@/components/ResendEmail/ContactForm.jsx';
import { PrismicNextImage } from '@prismicio/next';

const ContactText = (slice) => {
  return (
    <Wrapper>
      <Container>
        <ContainerImageBorder>
          <PrismicNextImage
            field={slice.primary.imageborder}
            alt={slice.primary.imageborder.alt || 'Imagen de borde'}
            width={slice.primary.imageborder.dimensions.width}
            height={slice.primary.imageborder.dimensions.height}
          />
        </ContainerImageBorder>
        <ContactForm text={slice.primary} />
        <ContainerImageBorder style={{ top: '0' }}>
          <PrismicNextImage
            field={slice.primary.imageborder}
            alt={slice.primary.imageborder.alt || 'Imagen de borde2'}
            width={slice.primary.imageborder.dimensions.width}
            height={slice.primary.imageborder.dimensions.height}
          />
        </ContainerImageBorder>
      </Container>
    </Wrapper>
  );
};

export { ContactText };
