import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useState } from 'react';
import {
  ContainerTitle,
  ContainerText,
  ContainerImage,
  Transition,
  Wrapper,
} from './defaultStyles';
import { motion, AnimatePresence } from 'framer-motion';

const ImageWithFrase = (slice) => {
  console.log('--slice--', slice);
  const { title, imagecentral, imageleft, imageright, textfirst } = slice.primary;

  return (
    <Wrapper>
      <ContainerTitle>
        <h3>{title}</h3>
        <ContainerImage style={{ top: '0' }}>
          <PrismicNextImage
            field={imagecentral}
            alt={imagecentral.alt || 'Imagen de titulo'}
            width={imagecentral.dimensions.width}
            height={imagecentral.dimensions.height}
          />
        </ContainerImage>
      </ContainerTitle>
      <ContainerText>
        <PrismicRichText field={textfirst} />
        <PrismicNextImage field={imageright} alt="" />
      </ContainerText>
    </Wrapper>
  );
};

export { ImageWithFrase };
