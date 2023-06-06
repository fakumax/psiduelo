import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useState } from 'react';
import { Container, Transition, Wrapper } from './defaultStyles';
import { motion, AnimatePresence } from 'framer-motion';

const Default = (slice) => {
  // console.log('--slice--', slice);
  const { imageleft, imageright, textfirst, textsecond } = slice.primary;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(!isVisible);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <Wrapper>
      <Container>
        <AnimatePresence>
          {isVisible && (
            <Transition
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, display: 'flex' }}
            >
              <PrismicNextImage field={imageleft} alt='' />
              <PrismicRichText field={textfirst} />
            </Transition>
          )}
          {!isVisible && (
            <Transition
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 1, display: 'flex' }}
              style={{ flexDirection: 'row-reverse' }}
            >
              <PrismicNextImage field={imageright} alt='' />
              <PrismicRichText field={textsecond} />
            </Transition>
          )}
        </AnimatePresence>
      </Container>
    </Wrapper>
  );
};

export { Default };
