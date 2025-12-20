import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    return (
      <Html lang="es">
        <Head>
          {/* SEO Meta Tags */}
          <meta
            name="description"
            content="Psicóloga especialista en duelo y pérdidas. Acompaño a mujeres adultas en el proceso de duelo por fallecimiento de seres queridos y duelo por pérdida de mascotas. Terapia online personalizada en español. Supera el dolor con apoyo profesional."
          />
          <meta
            name="keywords"
            content="psicóloga especialista en duelo, terapia de duelo online, duelo por pérdida de mascotas, duelo por muerte de mascota, pérdida de un ser querido, psicóloga online español, terapia para mujeres, duelo adultos, acompañamiento en el duelo, superar la pérdida, psicología del duelo, terapia de pérdidas, apoyo emocional duelo, elaborar el duelo, proceso de duelo"
          />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#ffffff" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Psiduelo" />
          <meta property="og:title" content="Psicóloga Especialista en Duelo | Terapia Online" />
          <meta
            property="og:description"
            content="Acompañamiento profesional en el proceso de duelo por pérdida de seres queridos y mascotas. Terapia online personalizada."
          />
          <meta property="og:locale" content="es_ES" />

          <link
            rel="icon"
            type="image/png"
            sizes="any"
            href="/favicon.ico"
          />

          {/* Preconnect to external fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          {/* Load critical fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital@1&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />

          {/* Google Analytics & Google Ads */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaTrackingId}');
                    gtag('config', '${googleAdsId}');
                  `,
            }}
          />
        </Head>
        <body>
          {' '}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
