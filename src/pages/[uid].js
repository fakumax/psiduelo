import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { Layout } from '@/components/common/Layout';

export default function Page({ page, navigation, copyright }) {
  return (
    <Layout navigation={navigation} copyright={copyright}>
      <Head>
        <title>{prismic.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', params.uid);
  const navigation = await client.getSingle('navigation');
  const copyright = await client.getSingle('copyright');

  return {
    props: {
      page,
      navigation,
      copyright,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('page');

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: false,
  };
}
