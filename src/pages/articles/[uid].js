import { LayoutArticle } from '@/components/common/LayoutArticle';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import * as prismic from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import Head from 'next/head';

export default function Article({ article, navigation, copyright }) {
  if (article) {
    article.data.slices = article.data.slices.filter(
      (item) => item.variation !== 'shortTextDiario',
    );
  }
  const title = article ? prismic.asText(article.data.title) : 'Articulo';

  const imageUrl = article && article.data.image ? article.data.image.url : null;

  return (
    <LayoutArticle
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      copyright={copyright}
    >
      <Head>
        <title>{`Psi Duelo | ${title}`}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content="tu, lista, de, palabras, clave" />
        <meta name="author" content="Tu Nombre o Nombre del Sitio" />
        <meta property="og:title" content={`Psi Duelo | ${title}`} />
        <meta property="og:description" content={title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.tusitio.com/articulo/${article?.uid}`}
        />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Head>
      <SliceZone slices={article.data.slices} components={components} />
    </LayoutArticle>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const article = await client.getByUID('article', params.uid);
  const latestArticles = await client.getAllByType('article', {
    limit: 3,
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  });
  const navigation = await client.getSingle('navigation');
  const copyright = await client.getSingle('copyright');

  return {
    props: {
      article,
      latestArticles,
      navigation,
      copyright,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const articles = await client.getAllByType('article');
  return {
    paths: articles.map((article) => prismic.asLink(article)),
    fallback: false,
  };
}
