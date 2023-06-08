import dayjs from "dayjs";
import Link from "next/link";
import React, { FC } from "react";
import { BlogCards } from "~/src/pages/blogs/types/blogcard";
import IconDate from "~/public/icons/icon-date.svg";
import Image from "next/image";

const CardBlogs: FC<BlogCards> = ({ properties }) => {
  return (
    <div className="transition duration-300 ease-in-out hover:scale-80  rounded-md border-[#BFC0C0] border min-h-[150px] cursor-pointer ">
      <div className="flex flex-row">
        <img
          src={String(properties?.images?.files[0]?.file?.url)}
          alt="img-blogs"
          className="rounded-tl-md rounded-bl-md w-[150px] min-h-[150px] object-cover hidden sm:flex"
        />
        <div className="p-5">
          <h1 className="text-base font-bold">
            {properties?.title?.title[0]?.text?.content}
          </h1>
          <div className="flex flex-row items-center mt-1 mb-3">
            <Image src={IconDate} alt="icon-date" />
            <span className="text-xs font-normal ml-2">
              {dayjs(properties?.dates?.date?.start).format("MMMM D, YYYY")}
            </span>
          </div>
          <article className="text-sm font-normal">
            {properties?.description?.rich_text[0]?.plain_text.slice(0, 100)} .
            . .
          </article>
        </div>
      </div>
    </div>
  );
};

export default CardBlogs;
