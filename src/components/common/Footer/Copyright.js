import { PrismicLink } from '@prismicio/react';
import { FaHeart } from 'react-icons/fa';
import { Wrapper } from './CopyrightStyles';

const Copyright = ({ copyright }) => {
  //console.log('--slice--', copyright);
  const { text, link } = copyright.data;
  const date = new Date();

  const separarYReemplazarPalabras = () => {
    const palabras = text.split(/(\{.*?\})/);
    //console.log('palabras', palabras);
    const palabrotas = palabras.map((palabra, index) =>
      reemplazarPalabras(palabra, index),
    );
    //console.log(palabrotas);

    return palabrotas;
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
      '{fakumax}': <PrismicLink field={link}> Facundo Vergara </PrismicLink>,
      '{year}': date.getFullYear(),
    };

    return reemplazos[palabra] || palabra;
  };

  const testing = separarYReemplazarPalabras();

  return (
    <Wrapper>
      <p>
        {testing.map((textT, index) => (
          <span key={index}>{textT}</span>
        ))}
      </p>
    </Wrapper>
  );
};

export { Copyright };
