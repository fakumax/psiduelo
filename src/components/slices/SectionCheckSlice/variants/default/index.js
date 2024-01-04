import { PrismicRichText } from '@prismicio/react';
import { Container, SubItem, Wrapper } from './defaultStyles';

const Default = (slice) => {
  const { image, text, color } = slice.primary;
  const { items } = slice;
  return (
    <Wrapper style={{ backgroundImage: `url(${image.url})` }}>
      <Container color={color}>
        <PrismicRichText field={text} />
        <div className="subContainer">
          {items.map((item, index) => (
            <SubItem key={index}>
              <div className="titleItems">
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
