import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import {
  ContainerItems,
  HeadTitle,
  LeftContainer,
  RightContainer,
  WhiteContainer,
  Wrapper,
} from './defaultStyles';

const Default = (slice) => {
  const {
    bgcolor,
    bgleft,
    titleleft,
    textleft,
    descripcionleft,
    imageleft,
    textbutton,
    linkbutton,
  } = slice.primary;
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
          <PrismicLink field={linkbutton}> {textbutton}</PrismicLink>
        </WhiteContainer>
        <div className="ImagePaper">
          <PrismicNextImage field={bgleft} fallbackAlt="" />
        </div>
      </LeftContainer>

      <RightContainer>
        {slice.items.map((item, index) => {
          return (
            <ContainerItems key={index}>
              <div className="WrapperImage">
                <div className="ImageContainer">
                  <PrismicNextImage field={item.image} fallbackAlt="" />
                </div>
              </div>
              <div className="TextContainer">
                <HeadTitle>
                  <PrismicRichText field={item.title} key={index} />
                  <div className="new1" />
                </HeadTitle>
                <PrismicRichText field={item.description} />
                <PrismicLink field={item.linkbutton}> {item.textbutton}</PrismicLink>
              </div>
            </ContainerItems>
          );
        })}
      </RightContainer>
    </Wrapper>
  );
};

export { Default };
