import { PrismicNextImage } from '@prismicio/next';
import { Container, Wrapper } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  //console.log('--SectioCheckSlice--', slice);
  const { image, text, color, title } = slice.primary;
  const { items } = slice;
  //console.log(color);
  // console.log('--SectioCheckSlice--', JSON.stringify(description.items));
  return (
    <Wrapper style={{ backgroundImage: `url(${image.url})` }}>
      <Container color={color}>
        <div>
          <PrismicRichText field={text} />
        </div>
        <div className="subContainer">
          {items.map((item, index) => (
            <div key={index} className="subItem">
              <div className="iconContainer">
                <PrismicNextImage field={item.icon} />
              </div>
              <div className="textContainer">
                <PrismicRichText field={item.title} />
                <PrismicRichText field={item.description} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export { Default };
