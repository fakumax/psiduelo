import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { Container, HoverText, TextTitle, WrapperCard } from './CardStyle';

const Card = ({ items }) => {
  return (
    <Container>
      <TextTitle>
        <h3>
          <PrismicText field={items.text} />
        </h3>
      </TextTitle>
      <WrapperCard>
        <div className="ImageContainer">
          <PrismicLink field={items.link}>
            <PrismicNextImage field={items.image} />
            <HoverText>
              <h3>
                <PrismicText field={items.text} />
              </h3>
            </HoverText>
          </PrismicLink>
        </div>
      </WrapperCard>
    </Container>
  );
};
export default Card;
