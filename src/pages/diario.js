import DiarioPage from '@/components/DiarioPage/DiarioPage';
import { Layout } from '@/components/common/Layout';
import { createClient } from '@/prismicio';
import Head from 'next/head';

export default function Diario({ articles, navigation, copyright }) {
  return (
    <Layout navigation={navigation} copyright={copyright}>
      <Head>
        <title>Psi Duelo | Diario</title>
      </Head>
      <DiarioPage articles={articles} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const allArticles = await client.getAllByType('article');
  const filteredArticles = allArticles.filter((article) => {
    return article.data.options !== 'articuloComun';
  });

  // Ordenar los artículos filtrados por fecha de publicación en orden descendente
  const sortedArticles = filteredArticles.sort((a, b) => {
    return new Date(a.data.fecha_publicacion) - new Date(b.data.fecha_publicacion);
  });

  const navigation = await client.getSingle('navigation');
  const copyright = await client.getSingle('copyright');
  return {
    props: {
      articles: sortedArticles,
      navigation,
      copyright,
    },
  };
}
