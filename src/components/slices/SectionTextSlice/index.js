import { Default, Static, ImageWithFrase, StaticLarge } from './variants';

export const SectionTextSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['static']: Static,
    ['staticLarge']: StaticLarge,
    ['imageWithFrase']: ImageWithFrase,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
