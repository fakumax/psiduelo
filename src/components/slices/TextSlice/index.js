import {
  Author,
  AuthorTitleText,
  ContactText,
  ContactTurno,
  Default,
  Firma,
  PreguntaFrecuente,
  TitleText,
} from './variants';

export const TextSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ['default']: Default,
    ['author']: Author,
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
