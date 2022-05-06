export interface TagsBlogs {
  color: string
  id: string
  name: string
}

export interface Blogs {
  id: number;
  published: boolean;
  tags: TagsBlogs[];
  dates: string;
  description: string;
  images: string;
  slugs: string;
  title: string;
}

export interface DetailBlogs {
  detailBlogsPage: Blogs
  markdownBlocks: string
}
