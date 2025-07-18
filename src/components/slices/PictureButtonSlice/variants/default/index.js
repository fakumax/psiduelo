import { Container, Wrapper } from './defaultStyles';
import Card from './Card';

const Default = (slice) => {
  const { color } = slice.primary;
  return (
    <Wrapper>
      <Container color={color}>
        {slice.items.map((item) => (
          <Card items={item} cardStyle={item.cardStyle} key={item.id} />
        ))}
      </Container>
    </Wrapper>
  );
};

export { Default };
