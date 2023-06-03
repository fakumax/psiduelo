import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { ContainerCard, WrapperCard } from './CardStyle';

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
        <ContainerCard id={items.stylescard}>
          <PrismicText field={items.text} />
          <PrismicNextImage field={items.image} alt='' />
        </ContainerCard>
      </PrismicLink>
    </WrapperCard>
  );
};
export default Card;
