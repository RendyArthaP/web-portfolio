import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import dayjs from "dayjs";
import React from "react";
import { getPublishedBlogs } from "~/src/services/notionService";
import Link from "next/link";
import { colorConverter } from "~/src/utils/tagsColors";
import { BlogCards } from "~/src/types/schema";

const Blogs: NextPage = ({
  getBlogs
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className="flex flex-wrap mx-auto w-full pb-16">
      {getBlogs.map((blog: BlogCards) => {
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
              {blog.properties?.description?.rich_text.length > 0 && (
                <p className="text-grey font-poppins text-sm">
                  {blog.properties?.description?.rich_text[0]?.plain_text.slice(0,120)}...
                </p>
              )}
              {blog.properties?.tags?.multi_select.length > 0 && (
                <div className="flex flex-row mt-4 overflow-y-scroll">
                  {blog.properties?.tags?.multi_select?.map((tags) => {
                    return (
                      <div
                        className="rounded-md p-1 mr-2"
                        style={{backgroundColor: colorConverter(tags.color)}}
                        key={tags.id}
                      >
                        <p className="text-white font-poppins text-sm">
                          {tags.name}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )}
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
