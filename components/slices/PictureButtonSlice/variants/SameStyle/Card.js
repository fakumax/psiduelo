import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { HoverText, WrapperCard } from './CardStyle';

const Card = ({ items }) => {
  //console.log(items);

  return (
    <WrapperCard>
      <div className="ImageContainer">
        <PrismicLink field={items.link}>
          <PrismicNextImage field={items.image} alt="" />
          <HoverText>
            <h3>
              <PrismicText field={items.text} />
            </h3>
          </HoverText>
        </PrismicLink>
      </div>
    </WrapperCard>
  );
};
export default Card;
