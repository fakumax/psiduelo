import { PrismicProvider } from '@prismicio/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from '@/styles';
import { repositoryName, createClient } from '@/prismicio';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ButtonWhatsapp from '@/components/common/ButtonWhatsapp/ButtonWhatsapp';
import { Loading } from '@/components/common/Loading/Loading';
import * as gtag from '../utils/gAnalytics';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  const { globalSettings } = pageProps;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const MIN_LOADING_TIME = 500; 
  const FADE_OUT_DURATION = 200; 

  useEffect(() => {
    let loadingStartTime = null;
    let timeoutId = null;

    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (
        target &&
        target.href &&
        !target.href.startsWith('mailto:') &&
        !target.href.startsWith('tel:') &&
        !target.href.startsWith('#') &&
        !target.target // No abrir en nueva pestaña
      ) {
        try {
          const currentOrigin = window.location.origin;
          const linkUrl = new URL(target.href);

          if (currentOrigin === linkUrl.origin) {
            const currentPath = window.location.pathname;
            const newPath = linkUrl.pathname;

            if (currentPath !== newPath) {
              loadingStartTime = Date.now();
              setIsClosing(false);
              setLoading(true);
              gtag.pageview(newPath);

              // Cerrar el loading después del tiempo mínimo + fade
              timeoutId = setTimeout(() => {
                setIsClosing(true);
                setTimeout(() => {
                  setLoading(false);
                  setIsClosing(false);
                }, FADE_OUT_DURATION);
              }, MIN_LOADING_TIME);
            }
          }
        } catch (error) {
          // Silently handle URL parsing errors
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return (
    <PrismicProvider repositoryName={repositoryName}>
      <GlobalStyle theme={Theme} />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
        {globalSettings?.whatsappnumber && (
          <ButtonWhatsapp whatsappNumber={globalSettings.whatsappnumber} />
        )}
        {loading && <Loading isClosing={isClosing} />}
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
