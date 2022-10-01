import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import { getPublishedBlogs } from "~/src/services/notionService";
import { BlogCards } from "~/src/types/schema";
import CardBlogs from "./components/CardBlogs/CardBlogs";

const Blogs: NextPage = ({
  getBlogs
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div>
      {getBlogs.map((blog: BlogCards) => {
        return (
          <CardBlogs
            id={blog.id}
            properties={blog.properties}
          />
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
