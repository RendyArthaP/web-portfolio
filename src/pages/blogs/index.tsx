import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import dayjs from "dayjs";
import { getPublishedBlogs } from "~/src/services/notionService";
import Link from "next/link";
import { colorConverter } from "~/src/utils/tagsColors";
import { BlogCards } from "~/src/types/schema";

const Blogs: NextPage = ({
  getBlogs
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div>
      {getBlogs.map((blog: BlogCards) => {
        return (
          <div
            key={blog.id}
            className="mx-4 my-8 border border-[#BFC0C0] rounded-lg"
          >
            <div className="flex flex-col sm:flex-row">
              <img
                src={blog.properties?.images?.files[0]?.file?.url}
                className="flex rounded-t-lg md:rounded-lg md:rounded-tr-none md:rounded-br-none  h-60 w-full md:max-w-[220px]"
              />
              <div className="p-4 flex flex-col justify-between h-60">
                <div>
                  <h1 className="text-white font-bold font-nunito text-xl tracking-normal -mb-[7px]">
                    {blog.properties?.title?.title[0]?.text?.content}
                  </h1>
                  <span className="text-grey font-poppins text-xs mb-1">
                    {dayjs(blog.properties?.dates?.date?.start).format('MMMM D, YYYY')}
                  </span>
                </div>
                <div className="my-4">
                  {blog.properties?.description?.rich_text.length > 0 && (
                    <p className="text-grey font-poppins text-sm select-none">
                      {blog.properties?.description?.rich_text[0]?.plain_text.slice(0,200)}...
                    </p>
                  )}
                </div>
                <Link href={`/blogs/${blog.properties?.slug?.formula?.string}`}>
                  <a className="text-white font-normal mt-1 tracking-tight outline-none w-28">
                    Read More {">>"}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
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
