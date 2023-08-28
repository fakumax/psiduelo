import { Default, TitleText, AuthorTitleText } from './variants';

export const TextBlockSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['titleText']: TitleText,
    ['authorTitleText']: AuthorTitleText,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
