import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { ContainerCard, WrapperCard } from './CardStyle';
import { Individual } from './Individual';

const Card = ({ items }) => {
  return (
    <WrapperCard>
      <PrismicLink field={items.link}>
        <ContainerCard>
          <Individual id={items.stylescard} items={items} />
        </ContainerCard>
      </PrismicLink>
    </WrapperCard>
  );
};
export default Card;
