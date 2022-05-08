import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import dayjs from "dayjs";
import React from "react";
import { getPublishedBlogs } from "~/src/services/notionService";
import Link from "next/link";

const Blogs: NextPage = ({
  getBlogs
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className="flex flex-wrap mx-auto w-full pb-24">
      {getBlogs.map((blog) => {
        console.log(blog);
        return (
          <div
            key={blog.id}
            className="bg-dark-blue m-4 rounded-lg w-full max-w-xs overflow-hidden"
          >
            <img
              src={blog.properties?.images?.files[0]?.file?.url}
              className="rounded-t-lg h-56 lg:h-60 w-full object-cover"
            />
            <div className="p-3 flex flex-col">
              <span className="text-grey font-poppins text-sm mb-1">
                {dayjs(blog.properties?.dates?.date?.start).format('MMMM D, YYYY')}
              </span>
              <h1 className="text-white font-bold font-nunito text-xl tracking-normal">
                {blog.properties?.title?.title[0]?.text?.content}
              </h1>
              <p className="text-grey font-poppins text-sm">
                {blog.properties?.description?.rich_text[0]?.plain_text.slice(0,120)}...
              </p>
              <Link href={`/blogs/${blog.properties?.slug?.formula?.string}`}>
                <a className="text-white font-normal mt-4 tracking-tight">
                  Read More {">>"}
                </a>
              </Link>
            </div>
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
