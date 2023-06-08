import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { Wrapper } from './defaultStyles';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { bgcolor, bgleft, titleleft, textleft, descripcionleft } = slice.primary;
  return (
    <Wrapper color={bgcolor}>
      <div className='leftContainer'></div>
      <div className='rightContainer'>
        {slice.items.map((item, index) => (
          <>
            <div className='ImageContainer'>
              <PrismicNextImage field={item.image} />
            </div>
            <div className='TextContainer'>
              <PrismicRichText field={item.title} key={index} />
              <PrismicRichText field={item.description} />
              <>{item.textbutton}</>
            </div>
          </>
        ))}
      </div>
    </Wrapper>
  );
};

export { Default };
