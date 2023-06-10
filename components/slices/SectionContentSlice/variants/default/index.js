import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { ContainerItems, HeadTitle, Wrapper } from './defaultStyles';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { bgcolor, bgleft, titleleft, textleft, descripcionleft } = slice.primary;
  return (
    <Wrapper color={bgcolor}>
      <div className='leftContainer'></div>
      <div className='rightContainer'>
        {slice.items.map((item, index) => (
          <>
            <ContainerItems>
              <div className='ImageContainer'>
                <PrismicNextImage field={item.image} />
              </div>
              <div className='TextContainer'>
                <HeadTitle>
                  <PrismicRichText field={item.title} key={index} />
                  <div class='new1' />
                </HeadTitle>
                <PrismicRichText field={item.description} />
                <span>{item.textbutton}</span>
              </div>
            </ContainerItems>
          </>
        ))}
      </div>
    </Wrapper>
  );
};

export { Default };
