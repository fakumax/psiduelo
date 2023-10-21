import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { Layout } from '@/components/common/Layout';

const Index = ({ articles, page, navigation, copyright }) => {
  console.log(articles);

  return (
    <Layout navigation={navigation} copyright={copyright}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} articles={articles} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home');
  const navigation = await client.getSingle('navigation');
  const copyright = await client.getSingle('copyright');

  const articleIds = [
    'el-duelo-duele',
    'en-alicia-en-el-pais-de-las-maravillas-alicia-le-pregunta',
    'por-que-es-importante-el-apoyo-psicologico-en-el-duelo',
  ];
  const articlesResponse = await client.getByUIDs('article', articleIds);
  const articles = articlesResponse.results;

  //Si necesito traer un solor articulo.
  //const article = await client.getByUID('article', 'el-duelo-duele');

  return {
    props: {
      articles,
      page,
      navigation,
      copyright,
    },
  };
}
