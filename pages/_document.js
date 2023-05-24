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
