import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './defaultStyles';

const PreguntaFrecuente = (slice) => {
  return (
    <Wrapper>
      <Container>
        <PrismicRichText field={slice.primary.title} />

        {slice.items.map((item, index) => (
          <details key={index}>
            <summary>{item.titlefaq}</summary>
            <p>{item.descriptionfaq}</p>
          </details>
        ))}
      </Container>
    </Wrapper>
  );
};

export { PreguntaFrecuente };
