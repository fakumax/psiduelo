import { Header } from './Header';

import localFont from 'next/font/local';

import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

//////////// LOCAL //////////////////
// Font files can be colocated inside of `pages`
const hijrnotes = localFont({
  src: '../../fonts/Hijrnotes.ttf',
  variable: '--font-hijrnotes',
});

const skeptisgraph = localFont({
  src: '../../fonts/Skeptisgraph.ttf',
  variable: '--font-skeptisgraph',
});

export const Layout = ({ navigation, children }) => {
  return (
    <div
      className={`${inter.variable} ${roboto_mono.variable} ${hijrnotes.variable} ${skeptisgraph.variable}`}
    >
      <Header navigation={navigation} />
      <main>{children}</main>
    </div>
  );
};
