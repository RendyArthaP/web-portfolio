import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import { getPublishedBlogs } from "~/src/services/notionService";
import { BlogCards } from "~/src/pages/blogs/types/blogcard";
import CardBlogs from "./components/CardBlogs/CardBlogs";
import dayjs from "dayjs";
import Link from "next/link";

const Blogs: NextPage = ({
  getBlogs
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div>
      {getBlogs.map((blog: BlogCards) => {
        return (
          <div key={blog.id}>
            <CardBlogs properties={blog.properties} />
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
