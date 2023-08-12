import { Header, Copyright as Copr } from '@/components/common';

import localFont from 'next/font/local';

import { Inter, Marcellus } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

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
  //console.log(navigation);
  //console.log(copyright);

  return (
    <div
      className={`${inter.variable} ${marcellus.variable} ${hijrnotes.variable} ${skeptisgraph.variable}`}
    >
      <Header navigation={navigation} />
      <main>{children}</main>
      <Copr copyright={copyright} />
    </div>
  );
};
// Copr
