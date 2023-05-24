import { PrismicNextImage } from '@prismicio/next';
import { SliceFactory } from '../../../../common/Containers/SliceFactory';

const Default = (slice) => {
  return (
    <div className='container'>
      <PrismicNextImage field={slice.primary.image} />
    </div>
  );
};

// export const Default = SliceFactory(Base);
export default Default;
