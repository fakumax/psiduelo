import { Default } from './variants';

export const AboutMeSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
