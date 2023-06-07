import { PrismicNextImage } from '@prismicio/next';
import { Container, Wrapper } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  console.log('--SectioCheckSlice--', slice);
  const { image, text, color } = slice.primary;
  console.log(slice.items);
  const { items } = slice;
  console.log(color);
  // console.log('--SectioCheckSlice--', JSON.stringify(description.items));
  return (
    <Wrapper style={{ backgroundImage: `url(${image.url})` }}>
      <Container color={color}>
        <PrismicRichText field={text} />
        {items.map((item, index) => (
          <div className='subContainer' key={index}>
            <div>
              <PrismicNextImage field={item.icon} />
            </div>
            <PrismicRichText field={item.description} />
          </div>
        ))}
      </Container>
    </Wrapper>
  );
};

export { Default };
