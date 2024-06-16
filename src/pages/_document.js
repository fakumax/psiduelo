import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Descubre cómo la Psicóloga Diplomada y Especialista en Duelo puede ayudarte con atención psicológica online. Ofrecemos terapias personalizadas para adolescentes y adultos hispanohablantes, enfocándonos en el proceso de duelo y otros desafíos emocionales. Contacta hoy mismo para una consulta virtual y empieza tu camino hacia la recuperación emocional."
        />
        <meta
          name="keywords"
          content="psicóloga, especialista en duelo, atención psicológica online, terapia online, psicología, duelo, terapia para adolescentes, terapia para adultos, consulta psicológica, apoyo emocional, salud mental, hispanohablantes, terapia de duelo, terapia personalizada, recuperación emocional"
        />
        <meta name="author" content="Facundo Vergara" />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />

        {/* Preconnect to external fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

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

        {/* Google Analytics */}
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
