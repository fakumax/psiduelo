import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import {
  ContainerItems,
  HeadTitle,
  LeftContainer,
  WhiteContainer,
  Wrapper,
} from './defaultStyles';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { bgcolor, bgleft, titleleft, textleft, descripcionleft, imageleft } =
    slice.primary;
  return (
    <Wrapper color={bgcolor}>
      <LeftContainer>
        <WhiteContainer>
          <div className='ImageLeft'>
            <PrismicNextImage field={imageleft} />
          </div>
          <div className='TextLeft'>
            <PrismicRichText field={titleleft} />
            <PrismicRichText field={textleft} />
            <PrismicRichText field={descripcionleft} />
          </div>
        </WhiteContainer>
        <div className='ImagePaper'>
          <PrismicNextImage field={bgleft} />
        </div>
      </LeftContainer>
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
