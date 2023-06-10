import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { getPublishedPortfolio } from "~/src/services/notionService";
import CardPortfolio from "./components/CardPortfolio";
import { PortfolioCards } from "./types/portfoliocard";
import BackAndSearch from "~/src/components/BackAndSearch/BackAndSearch";

const Portfolio: NextPage = ({
  getPortfolio,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <BackAndSearch />
      {getPortfolio?.length > 0 ? (
        <div className="flex flex-wrap mb-20 mx-4 sm:mx-0">
          {getPortfolio?.map((portfolio: PortfolioCards) => {
            return (
              <div
                key={portfolio?.id}
                className="w-full sm:max-w-[288px] md:max-w-[255px] lg:max-w-[288px]"
              >
                <CardPortfolio properties={portfolio?.properties} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex h-screen text-center justify-center items-center">
          <h1 className="font-bold text-base">
            The Portofolio Section is Empty. Please Wait the Author To Input...
          </h1>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getPortfolio = await getPublishedPortfolio();

  return {
    props: {
      getPortfolio,
    },
  };
};

export default Portfolio;
