import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrismicNextImage } from '@prismicio/next';
import {
  BackgroundImage,
  Button,
  Container,
  FirstContainer,
  SecondContainer,
  Wrapper,
} from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { imageleft, imageright, textfirst, textsecond } = slice.primary;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(!isVisible);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <Wrapper>
      <Container>
        <FirstContainer
          initial={{ opacity: 1 }}
          animate={{
            opacity: isVisible ? 0 : 1,
            transitionEnd: {
              display: isVisible ? 'none' : 'flex',
            },
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <PrismicNextImage field={imageleft} alt='' />
          <PrismicRichText field={textfirst} />
        </FirstContainer>
        <SecondContainer
          initial={{ opacity: 0 }}
          animate={{
            opacity: !isVisible ? 0 : 1,
            transitionEnd: {
              display: !isVisible ? 'none' : 'flex',
            },
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <PrismicNextImage field={imageright} alt='' />
          <PrismicRichText field={textsecond} />
        </SecondContainer>
      </Container>
    </Wrapper>
  );
};

export { Default };
