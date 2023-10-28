import { Default, ImageText, ImageParagraph } from './variants';

export const ImageBlockSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['imageText']: ImageText,
    ['imageParagraph']: ImageParagraph,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
