import client from './client';
import {ArticleResponse, ArticlesResponse} from './types';

export async function getArticles() {
  const response = await client.get<ArticlesResponse>('/articles');
  return response.data;
}

export async function getArticle(id: number) {
  const response = await client.get<ArticleResponse>(
    `/articles/${id}?populate=author`,
  );
  // console.log('아티클' + id);
  // console.log(response.data.data);
  return response.data.data;
}
