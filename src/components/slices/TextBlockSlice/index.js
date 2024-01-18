import {
  Default,
  TitleText,
  AuthorTitleText,
  Firma,
  ContactText,
  ContactTurno,
} from './variants';

export const TextBlockSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['titleText']: TitleText,
    ['authorTitleText']: AuthorTitleText,
    ['contactText']: ContactText,
    ['contactTurno']: ContactTurno,
    ['firma']: Firma,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
