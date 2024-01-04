import { PrismicNextImage } from '@prismicio/next';
import { Container, SubItem, Wrapper } from './defaultStyles';
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
        <PrismicRichText field={text} />
        <div className="subContainer">
          {items.map((item, index) => (
            <SubItem key={index}>
              <div className="titleItems">
                {/* <PrismicNextImage field={item.icon} /> */}
                <PrismicRichText field={item.title} />
              </div>
              <PrismicRichText field={item.description} />
                 </SubItem>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export { Default };
