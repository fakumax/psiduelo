import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { ThemeProvider } from 'styled-components';
import { repositoryName, linkResolver } from '../prismicio';
import { GlobalStyle, Theme } from '../components/styles';

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
        <ThemeProvider theme={Theme}>
          <GlobalStyle theme={Theme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
