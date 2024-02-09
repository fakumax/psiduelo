import React from 'react';

import {
  Container,
  ContainerImage,
  ContainerImageBorderDown,
  ContainerImageBorderUp,
  Wrapper,
} from './defaultStyles.js';
import { ContactForm } from '@/components/ResendEmail/ContactForm.jsx';
import { PrismicNextImage } from '@prismicio/next';

const ContactText = (slice) => {
  console.log('slice', slice);
  //   top: 80px;
  // transform: rotate(0.5turn);
  return (
    <Wrapper>
      <Container>
        <ContainerImageBorderUp>
          <PrismicNextImage
            field={slice.primary.imageborder}
            alt={slice.primary.imageborder.alt || 'Imagen de borde'}
            width={slice.primary.imageborder.dimensions.width}
            height={slice.primary.imageborder.dimensions.height}
          />
        </ContainerImageBorderUp>
        <ContactForm text={slice.primary} />
        <ContainerImageBorderDown>
          <PrismicNextImage
            field={slice.primary.imageborder}
            alt={slice.primary.imageborder.alt || 'Imagen de borde'}
            width={slice.primary.imageborder.dimensions.width}
            height={slice.primary.imageborder.dimensions.height}
          />
        </ContainerImageBorderDown>
      </Container>
    </Wrapper>
  );
};

export { ContactText };
