import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import React from "react";
import { getPublishedPortfolio } from "~/src/services/notionService";
import CardPortfolio from "./components/CardPortfolio";
import { PortfolioCards } from "./types/portfoliocard";

const Portfolio: NextPage = ({
  getPortfolio
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(getPortfolio);
  return (
    <div>
      {getPortfolio.map((portfolio: PortfolioCards) => {
        return (
          <div key={portfolio.id}>
            <CardPortfolio properties={portfolio.properties} />
          </div>
        )
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getPortfolio = await getPublishedPortfolio();

  return {
    props: {
      getPortfolio
    }
  }
}

export default Portfolio;
