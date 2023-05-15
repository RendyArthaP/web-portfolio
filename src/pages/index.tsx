import type { NextPage } from "next";
import Image from "next/image";
import GifSectionHome from "~/public/icons/section-home.gif";

const Home: NextPage = () => {
  return (
    <div className="mx-4 my-8">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-semibold text-2xl">
            Hello Everyone,
          </h1>
          <h2 className="text-md">
            I'm <b className="text-md">Rendy Artha Prawira</b>{' '}--{' '}Web Engineer
          </h2>
          <p>
            Gathering the results of learning as my journey, which I gathered into one platform.
            Hope it is useful for you all. If you need my services, please reach me out.
          </p>
          <p>
            I usually use this stack
          </p>
        </div>
        <Image
          src={GifSectionHome}
          width={800}
          height={500}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default Home;
