import { Header, Copyright as Copr } from '@/components/common';
import localFont from 'next/font/local';
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

export const Layout = ({ navigation, copyright, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      className={` ${marcellus.variable} ${hijrnotes.variable} ${skeptisgraph.variable}`}
    >
      <Header navigation={navigation} show={show} setShow={setShow} />
      {!show && (
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
      )}
      <Copr copyright={copyright} />
    </div>
  );
};
