import { Header, Copyright as Copr } from '@/components/common';
import localFont from 'next/font/local';
import styled from 'styled-components';
import { Marcellus } from 'next/font/google';
import { useState } from 'react';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-marcellus',
});

//////////// LOCAL //////////////////
// Font files can be colocated inside of `pages`
const hijrnotes = localFont({
  src: '../../assets/fonts/Hijrnotes.ttf',
  variable: '--font-hijrnotes',
});

const skeptisgraph = localFont({
  src: '../../assets/fonts/Skeptisgraph.ttf',
  variable: '--font-skeptisgraph',
});

// Styled component para el main
const Main = styled.main`
   margin: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 4rem 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`;

export const LayoutArticle = ({ navigation, copyright, children }) => {
  const [show, setShow] = useState(false);
  return (
      <Container className={`${marcellus.variable} ${hijrnotes.variable} ${skeptisgraph.variable}`}>
        <Header navigation={navigation} show={show} setShow={setShow} />
        {!show && <Main>{children}</Main>}
        <Copr copyright={copyright} />
      </Container>

  );
};
