import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { WrapperCard } from './CardStyle';

const Card = ({ items }) => {
  console.log(items);
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
      <PrismicText field={items.text} />
      <PrismicLink field={items.link}>
        <PrismicNextImage field={items.image} />
      </PrismicLink>
    </WrapperCard>
  );
};
export default Card;
