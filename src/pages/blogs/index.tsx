import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import Link from "next/link";
import React from "react";
import { getPublishedBlogs } from "~/src/services/notionService";

const Blogs: NextPage = ({
  getBlogs
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div>
      {getBlogs.map((blog) => {
        return (
          <div key={blog.id}>
            <Link href={`/blogs/${blog.properties?.slug?.formula?.string}`}>
              <h1>
                {blog.properties?.title?.title[0]?.text?.content}
              </h1>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const getBlogs = await getPublishedBlogs();

  return {
    props: {
      getBlogs
    }
  }
};
