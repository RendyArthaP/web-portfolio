import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { getPublishedBlogs } from "~/src/services/notionService";
import { BlogCards } from "~/src/pages/blogs/types/blogcard";
import CardBlogs from "./components/CardBlogs";
import BackButton from "~/src/components/BackButton";

const Blogs: NextPage = ({
  getBlogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="mx-4">
      <BackButton />
      <div>
        {getBlogs?.length > 0 ? (
          <div className="flex flex-wrap mb-20">
            {getBlogs.map((blog: BlogCards) => {
              return (
                <div
                  key={blog?.id}
                  className="w-full sm:max-w-[288px] md:max-w-[255px] lg:max-w-[288px]"
                >
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
