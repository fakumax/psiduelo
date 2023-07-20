import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import * as prismic from '@prismicio/client';

import { createClient } from '../prismicio';
import { components } from '../slices';
import { Layout } from '../components/common/Layout';
import Link from 'next/link';

const Article = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          {prismicH.asText(page.data.title)} | {prismicH.asText(settings.data.siteTitle)}
        </title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Article;

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

  return {
    props: {
      article,
      latestArticles,
      navigation,
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
