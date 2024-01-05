import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './ModalStyle';

const ContentModal = ({ data }) => {
  const titles = data.title[0].text;
  const description = data.description.map((item) => item.text).join(' ');

  return (
    <Wrapper>
      <Container>
        <div>
          <PrismicRichText field={data.title} />
          {data.description.map((item, index) => {
            <PrismicRichText field={item.text} key={index} />;
          })}
          <p>{description}</p>
          {/* <PrismicRichText field={item.text} /> */}
        </div>
      </Container>
    </Wrapper>
  );
};

export { ContentModal };
