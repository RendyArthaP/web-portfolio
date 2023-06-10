import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { getPublishedBlogs } from "~/src/services/notionService";
import { BlogCards } from "~/src/pages/blogs/types/blogcard";
import CardBlogs from "./components/CardBlogs";
import BackAndSearch from "~/src/components/BackAndSearch";

const Blogs: NextPage = ({
  getBlogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <BackAndSearch />
      <div>
        {getBlogs?.length > 0 ? (
          <div className="flex flex-col m-4">
            {getBlogs?.map((blog: BlogCards) => {
              return (
                <div key={blog?.id} className="mt-2 mb-4">
                  <CardBlogs properties={blog?.properties} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex h-screen text-center justify-center items-center">
            <h1 className="font-bold text-base">
              The Blogs Section is Empty. Please Wait the Author To Input...
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const getBlogs = await getPublishedBlogs();

  return {
    props: {
      getBlogs,
    },
  };
};
