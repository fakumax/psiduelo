import { PrismicNextImage } from '@prismicio/next';
import styled from 'styled-components';

const Default = (slice) => {
  const { image } = slice.primary;

  return (
    <HeroContainer>
      <BackgroundImage style={{ backgroundImage: `url(${image.url})` }} />
      <StyledPrismicNextImage field={image} />
    </HeroContainer>
  );
};

export { Default };

const HeroContainer = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Mantiene la imagen de fondo detrás */
`;

const StyledPrismicNextImage = styled(PrismicNextImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: hidden; /* La imagen de optimización estará oculta */
`;
