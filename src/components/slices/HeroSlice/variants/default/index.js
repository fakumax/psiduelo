import { PrismicNextImage } from '@prismicio/next';
import { BackgroundImage, Button } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  const { image } = slice.primary;
  return (
    <div>
      <BackgroundImage style={{ backgroundImage: `url(${image.url})` }} />
    </div>
  );
};

export { Default };
