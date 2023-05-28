import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from '../components/styles';
import { repositoryName } from '../prismicio';

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href} {...props}>
          {children}
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <GlobalStyle theme={Theme} />
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
