export type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type Pagination = {
  total_count: number;
  limit_value: number;
  total_pages: number;
  current_page: number;
}

export type PostPaginate = {
  posts:Post[];
  pagination:Pagination;
}