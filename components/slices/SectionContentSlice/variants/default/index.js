import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, PrismicText, PrismicLink } from '@prismicio/react';
import {
  ContainerItems,
  HeadTitle,
  LeftContainer,
  WhiteContainer,
  Wrapper,
} from './defaultStyles';

const Default = (slice) => {
  // console.log('--slice--', slice);
  const { bgcolor, bgleft, titleleft, textleft, descripcionleft, imageleft, textbutton } =
    slice.primary;
  return (
    <Wrapper color={bgcolor}>
      <LeftContainer>
        <WhiteContainer>
          <div className="ImageLeft">
            <PrismicNextImage field={imageleft} />
          </div>
          <div className="TextLeft">
            <PrismicRichText field={titleleft} />
            <PrismicRichText field={descripcionleft} />
          </div>
          <div className="ButtonLeft">
            <PrismicLink field={textleft}>{textbutton}</PrismicLink>
          </div>
        </WhiteContainer>
        <div className="ImagePaper">
          <PrismicNextImage field={bgleft} />
        </div>
      </LeftContainer>
      <div className="rightContainer">
        {slice.items.map((item, index) => (
          <>
            <ContainerItems>
              <div className="WrapperImage">
                <div class="ImageContainer">
                  <PrismicNextImage field={item.image} />
                </div>
              </div>
              <div className="TextContainer">
                <HeadTitle>
                  <PrismicRichText field={item.title} key={index} />
                  <div class="new1" />
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
