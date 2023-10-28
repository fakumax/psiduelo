import { createClient } from '@/prismicio';

export async function fetchArticles(previewData) {
  const client = createClient({ previewData });

  const articleIds = [
    'el-duelo-duele',
    'en-alicia-en-el-pais-de-las-maravillas-alicia-le-pregunta',
    'por-que-es-importante-el-apoyo-psicologico-en-el-duelo',
  ];

  const articlesResponse = await client.getByUIDs('article', articleIds);
  const articles = articlesResponse.results;

  return articles;
}
