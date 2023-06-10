import dayjs from "dayjs";
import React, { FC } from "react";
import { PortfolioCards } from "../types/portfoliocard";

const CardPortfolio: FC<PortfolioCards> = ({ properties }) => {
  return (
    <div className="sm:mx-4 mt-4 bg-dark-blue border border-dark-blue rounded-lg h-[26.5rem]">
      <div className="flex flex-col">
        <img
          src={properties?.image_alt?.url}
          className="flex rounded-tr-lg rounded-tl-lg h-48 object-cover w-full"
        />
        <div className="p-4 flex flex-col justify-between h-56">
          <div>
            <h1 className="text-white font-bold font-nunito text-xl tracking-normal -mb-[7px]">
              {properties?.name?.title[0]?.text?.content}
            </h1>
            <span className="text-grey font-poppins text-xs mb-1">
              {dayjs(properties?.date?.date?.start).format("MMMM D, YYYY")}
            </span>
          </div>
          <div className="mt-2 mb-4">
            {properties?.description?.rich_text.length > 0 && (
              <p className="text-grey font-poppins text-sm select-none">
                {properties?.description?.rich_text[0]?.plain_text.slice(
                  0,
                  100,
                )}
                ...
              </p>
            )}
          </div>
          <a
            className="text-white font-normal tracking-tight outline-none bg-light-orange cursor-pointer w-full text-center py-1 rounded-md"
            href={properties?.link?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo App!
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
