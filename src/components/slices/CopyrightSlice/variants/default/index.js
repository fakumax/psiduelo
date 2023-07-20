import { PrismicLink } from '@prismicio/react';
import { FaHeart } from 'react-icons/fa';
import { Wrapper } from './defaultStyles';

const Default = (slice) => {
  // console.log('--slice--', slice);
  const { text } = slice.primary;
  const date = new Date();

  const separarYReemplazarPalabras = () => {
    const palabras = text.split(/(\{.*?\})/);
    return palabras.map((palabra, index) => reemplazarPalabras(palabra, index));
  };

  // const separarYReemplazarPalabras = () => {
  //   const palabras = text.split(/(\{.*?\})/);
  //   return palabras.map((palabra, index) => {
  //     return {
  //       palabra: palabra,
  //       indice: index,
  //       resultado: reemplazarPalabras(palabra, index),
  //     };
  //   });
  // };

  const reemplazarPalabras = (palabra) => {
    const reemplazos = {
      '{love}': <FaHeart className="heart-icon" />,
      '{fakumax}': <PrismicLink field={slice.primary.link}>Facundo Vergara</PrismicLink>,
      '{year}': date.getFullYear(),
    };
    return reemplazos[palabra] || palabra;
  };

  const textT = separarYReemplazarPalabras;

  return (
    <Wrapper>
      <p>{textT}</p>
    </Wrapper>
  );
};

export { Default };
