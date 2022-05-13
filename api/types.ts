export interface User {
  data: {
    id: number;
    attributes: {
      username: string;
      email: string;
      provider: string;
      confirmed: boolean;
      blocked: null | boolean;
      role: number;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    body: string;
    author: User;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

// export interface ArticlePost {
//   id: number;
//   attributes: Article;
// }

export interface ArticleResponse {
  data: Article;
  meta: Meta;
}

export interface ArticlesResponse {
  data: Article[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
  date: number;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Comment {
  id: number;
  attributes: {
    message: string;
    author: User;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CommentResponse {
  data: Comment;
  meta: Meta;
}

export interface CommentsResponse {
  data: Comment[];
  meta: Meta;
}

export interface AuthResult {
  jwt: string;
  user: User;
}
