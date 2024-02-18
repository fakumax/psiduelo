import {
  AuthorTitleText,
  ContactText,
  ContactTurno,
  Default,
  Firma,
  PreguntaFrecuente,
  TitleText,
} from './variants';

export const TextBlockSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['titleText']: TitleText,
    ['preguntaFrecuente']: PreguntaFrecuente,
    ['authorTitleText']: AuthorTitleText,
    ['contactText']: ContactText,
    ['contactTurno']: ContactTurno,
    ['firma']: Firma,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};
