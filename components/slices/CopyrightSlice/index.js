import { Default } from './variants';

export const CopyrightSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
