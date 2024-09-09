import { PrismicProvider } from '@prismicio/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from '@/styles';
import { repositoryName, createClient } from '@/prismicio';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ButtonWhatsapp from '@/components/common/ButtonWhatsapp/ButtonWhatsapp';
import * as gtag from '../utils/gAnalytics';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  const { globalSettings } = pageProps;
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <PrismicProvider repositoryName={repositoryName}>
      <GlobalStyle theme={Theme} />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
        {globalSettings?.whatsappnumber && (
          <ButtonWhatsapp whatsappNumber={globalSettings.whatsappnumber} />
        )}
      </ThemeProvider>
    </PrismicProvider>
  );
};

App.getInitialProps = async (appContext) => {
  const client = createClient();
  const globalSettings = await client.getSingle('global_settings');
  let appProps = {};
  if (appContext.Component.getInitialProps) {
    appProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      globalSettings: globalSettings?.data || null,
    },
  };
};

export default App;
