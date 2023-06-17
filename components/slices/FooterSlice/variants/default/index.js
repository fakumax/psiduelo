import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { FirstColumn, SecondColumn, Wrapper } from './defaultStyles';

const Default = (slice) => {
  // console.log('--slice--', slice);
  const { image, description } = slice.primary;
  return (
    <Wrapper>
      <FirstColumn>
        <div className='ImageLeft'>
          <PrismicNextImage field={image} />
        </div>
        <PrismicRichText field={description} />
      </FirstColumn>
      <SecondColumn>
        {/* <>{item.columns}</>
      <>{item.text}</>
      <PrismicLink field={item.link}>Link</PrismicLink>
      <PrismicNextImage field={item.image} /> */}
      </SecondColumn>
    </Wrapper>
  );
};

export { Default };
