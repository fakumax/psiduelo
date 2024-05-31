import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './ModalStyle';

const ContentModal = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <PrismicRichText field={data.title} />
          {data.description.map((item, index) => {
            <PrismicRichText field={item.text} key={index} />;
          })}
          <PrismicRichText field={data.texto_modal} />
        </div>
      </Container>
    </Wrapper>
  );
};

export { ContentModal };
