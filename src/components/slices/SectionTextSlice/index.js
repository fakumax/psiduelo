import { Default, Static, ImageWithFrase } from './variants';

export const SectionTextSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['static']: Static,
    ['imageWithFrase']: ImageWithFrase,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
