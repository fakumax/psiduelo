import { Default, TitleText, AuthorTitleText, Firma } from './variants';

export const TextBlockSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['titleText']: TitleText,
    ['authorTitleText']: AuthorTitleText,
    ['firma']: Firma,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
