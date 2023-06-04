import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { ContainerCard, WrapperCard } from './CardStyle';
import { Individual } from './Individual';

const Card = ({ items }) => {
  console.log(items);
  console.log(items.stylescard);
  //   const { title, description, image } = items;
  //   return (
  //     <div className='card'>
  //       <img src={image} alt='' />
  //       <h2>{title}</h2>
  //       <p>{description}</p>
  //     </div>
  //   );
  // }
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
