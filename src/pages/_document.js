import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="Psicóloga Diplomada y Especialista en Duelo. Atención Psicológica Online a Adolescentes y Adultos hispanohablantes." />
        <meta name="keywords" content="duelo, psicóloga, psicología, atención online, especialista" />
        <meta name="author" content="Facundo Vergara" />
        <link rel="icon" type="image/png" sizes="any" href="https://prismic.io/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital@1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaTrackingId}');
                  `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
