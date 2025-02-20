export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Pagination = {
  totalPages: number;
  currentPage: number;
};

export type PostPaginate = {
  posts:Post[];
  pagination:Pagination;
};

export type errorNewsType = {
  errors?: {
    title?:string;
    content?:string;
  }
};