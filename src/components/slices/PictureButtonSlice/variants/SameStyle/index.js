import Card from './Card';
import { Container, Wrapper } from './defaultStyles';

const SameStyle = (slice) => {
  const { color } = slice.primary;
  return (
    <Wrapper>
      <Container color={color}>
        {slice.items.map((item) => (
          <Card items={item} cardStyle={item.cardStyle} key={item.image.alt} />
        ))}
      </Container>
    </Wrapper>
  );
};

export { SameStyle };
