import { Default, SameStyle } from './variants';

export const PictureButtonSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['sameStyle']: SameStyle,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
