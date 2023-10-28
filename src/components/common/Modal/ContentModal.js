import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './ModalStyle';

const ContentModal = ({ data }) => {
  console.log('--slice--TextBlockSlice', data);
  return (
    <Wrapper>
      <Container>
        {data?.map((slice, index) => (
          <>
            <div key={index}>
              <PrismicRichText field={slice.primary.title} />
              <PrismicRichText field={slice.primary.text} />
            </div>
          </>
        ))}
      </Container>
    </Wrapper>
  );
};

// {
//   selectedItem && (
//     <>
//       {selectedItem.data.slices.map((slice, index) => (
//         <div key={index}>
//           <PrismicRichText field={slice.primary.title} />
//         </div>
//       ))}
//     </>
//   );
// }
export { ContentModal };
