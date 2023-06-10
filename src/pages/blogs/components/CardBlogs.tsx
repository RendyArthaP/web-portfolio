import dayjs from "dayjs";
import Link from "next/link";
import React, { FC } from "react";
import { BlogCards } from "~/src/pages/blogs/types/blogcard";
import IconDate from "~/public/icons/icon-date.svg";
import Image from "next/image";

const CardBlogs: FC<BlogCards> = ({ properties }) => {
  return (
    <Link href={`/blogs/${properties?.slug?.formula?.string}`}>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-dark-blue duration-300 rounded-md border-[#BFC0C0] border min-h-[150px] cursor-pointer ">
        <div className="flex flex-row">
          <img
            src={String(properties?.images?.files[0]?.file?.url)}
            alt="img-blogs"
            className="rounded-tl-md rounded-bl-md w-[150px] min-h-[150px] object-cover hidden sm:flex"
            loading="lazy"
          />
          <div className="p-5">
            <h1 className="text-base font-bold sm:text-xl">
              {properties?.title?.title[0]?.text?.content}
            </h1>
            <div className="flex flex-row items-center mt-1 mb-3">
              <Image src={IconDate} alt="icon-date" />
              <span className="text-xs font-normal ml-2 sm:text-sm">
                {dayjs(properties?.dates?.date?.start).format("MMMM D, YYYY")}
              </span>
            </div>
            <article className="text-sm font-normal sm:text-base">
              {properties?.description?.rich_text[0]?.plain_text.slice(0, 150)}{" "}
              . . .
            </article>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBlogs;
