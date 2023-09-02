import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import {
  ContainerItems,
  HeadTitle,
  LeftContainer,
  RightContainer,
  WhiteContainer,
  Wrapper,
} from './defaultStyles';

const Default = (slice) => {
  //console.log('--slice--', slice);
  const { bgcolor, bgleft, titleleft, textleft, descripcionleft, imageleft, textbutton } =
    slice.primary;
  return (
    <Wrapper color={bgcolor}>
      <LeftContainer>
        <WhiteContainer>
          <div className="ImageLeft">
            <PrismicNextImage field={imageleft} fallbackAlt="" />
          </div>
          <div className="TextLeft">
            <PrismicRichText field={titleleft} />
            <PrismicRichText field={descripcionleft} />
          </div>
          <PrismicNextLink field={textleft}>{textbutton}</PrismicNextLink>
        </WhiteContainer>
        <div className="ImagePaper">
          <PrismicNextImage field={bgleft} fallbackAlt="" />
        </div>
      </LeftContainer>

      <RightContainer>
        {slice.items.map((item, index) => (
          <ContainerItems key={index}>
            <div className="WrapperImage">
              <div className="ImageContainer">
                <PrismicNextImage field={item.image} />
              </div>
            </div>
            <div className="TextContainer">
              <HeadTitle>
                <PrismicRichText field={item.title} key={index} />
                <div className="new1" />
              </HeadTitle>
              <PrismicRichText field={item.description} />
              <PrismicNextLink field={item.linkbutton}>{item.textbutton}</PrismicNextLink>
            </div>
          </ContainerItems>
        ))}
      </RightContainer>
    </Wrapper>
  );
};

export { Default };
