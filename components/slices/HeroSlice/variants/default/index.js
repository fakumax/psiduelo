import { Button } from '../default/defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { image } = slice.primary;
  return (
    <div>
      <div>
        <img src={image.url} alt='HeroImg' />
      </div>
    </div>
  );
};

export { Default };
