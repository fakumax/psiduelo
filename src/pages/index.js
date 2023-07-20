import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { Layout } from '@/components/common/Layout';

const Index = ({ page, navigation }) => {
  console.log(navigation);

  return (
    <Layout navigation={navigation}>
      {/* <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head> */}
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home');
  const navigation = await client.getSingle('navigation');

  return {
    props: {
      page,
      navigation,
    },
  };
}
