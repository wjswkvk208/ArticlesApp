import client from './client';
import {CommentsResponse} from './types';

export async function getComments(articleId: number) {
  const response = await client.get<CommentsResponse>(
    `/articles/${articleId}/comments`,
  );

  return response.data.data;
}
