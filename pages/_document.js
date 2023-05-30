import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
      <Head />
      <link
        rel='icon'
        type='image/png'
        sizes='any'
        href='https://prismic.io/favicon.ico'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital@1&display=swap'
        rel='stylesheet'
      />

      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
        rel='stylesheet'
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
