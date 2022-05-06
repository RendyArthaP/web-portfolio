import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react'
import { getPublishedDetailBlogs, getPublishedBlogs } from '~/src/services/notionService';
import ReactMarkdown from "react-markdown";

interface IParams extends ParsedUrlQuery {
  slug: string
}

const BlogsDetail = ({
  markdown,
  blogDetails
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <article className='prose'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  )
}

export default BlogsDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const data = await getPublishedDetailBlogs(slug);

  return {
    props: {
      markdown: data.markdown,
      blogDetails: data.detailBlogsPages,
    }
  }
};

export const getStaticPaths = async () => {
  const getBlogs = await getPublishedBlogs();
  const paths = getBlogs.map((blog) => ({
    params: {
      slug: blog.id
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
};
