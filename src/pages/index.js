import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { Layout } from '@/components/common/Layout';

const Index = ({ page, navigation, copyright }) => {
  return (
    <Layout navigation={navigation} copyright={copyright}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData });
    const [page, navigation, copyright] = await Promise.all([
      client.getByUID('page', 'home'),
      client.getSingle('navigation'),
      client.getSingle('copyright'),
    ]);
    return {
      props: {
        page,
        navigation,
        copyright,
      },
    };
  } catch (error) {
    console.error('Error fetching data from Prismic', error);
    return {
      props: {
        page: null,
        navigation: null,
        copyright: null,
      },
    };
  }
}
