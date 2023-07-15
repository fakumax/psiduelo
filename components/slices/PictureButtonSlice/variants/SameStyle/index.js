import Card from './Card';
import { Container, Wrapper } from './defaultStyles';

const SameStyle = (slice) => {
  //console.log('--slice--', slice);
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

export { SameStyle };
