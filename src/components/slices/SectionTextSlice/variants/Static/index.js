import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { useEffect, useState } from 'react';
import { Container, Transition, Wrapper } from './defaultStyles';
import { motion, AnimatePresence } from 'framer-motion';

const Static = (slice) => {
  //console.log('--slice--', slice);
  const { imageleft, imageright, textfirst, textsecond, colorletter, bgcolor } =
    slice.primary;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(!isVisible);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <Wrapper colorletter={colorletter} bgcolor={bgcolor}>
      <Container>
        <PrismicNextImage field={imageleft} alt="" />
        <PrismicRichText field={textfirst} />

        <PrismicNextImage field={imageright} alt="" />
        <PrismicRichText field={textsecond} />
      </Container>
    </Wrapper>
  );
};

export { Static };
