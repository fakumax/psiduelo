import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useState } from 'react';
import { Container, Transition, Wrapper } from './defaultStyles';
import { motion, AnimatePresence } from 'framer-motion';

const Static = (slice) => {
  console.log('--slice--', slice);
  const { imageleft, imageright, textfirst, colorbg } = slice.primary;

  return (
    <Wrapper bgColor={colorbg}>
      <Container>
        <PrismicNextImage field={imageleft} alt="" />
        <PrismicRichText field={textfirst} />
        <PrismicNextImage field={imageright} alt="" />
      </Container>
    </Wrapper>
  );
};

export { Static };
