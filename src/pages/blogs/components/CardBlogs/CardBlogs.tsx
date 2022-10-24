import dayjs from 'dayjs'
import Link from 'next/link'
import React, { FC } from 'react'
import { BlogCards } from "~/src/pages/blogs/types/blogcard";

const CardBlogs: FC<BlogCards> = ({
  properties
}) => {
  return (
    <div className="mx-4 my-8 bg-dark-blue border border-dark-blue rounded-lg w-full max-w-[280px]">
      <div className="flex flex-col">
        <img
          src={properties?.images?.files[0]?.file?.url}
          className="flex rounded-tr-lg rounded-tl-lg h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-white font-bold font-nunito text-xl tracking-normal -mb-[7px]">
              {properties?.title?.title[0]?.text?.content}
            </h1>
            <span className="text-grey font-poppins text-xs mb-1">
              {dayjs(properties?.dates?.date?.start).format('MMMM D, YYYY')}
            </span>
          </div>
          <div className='my-2'>
            {properties?.description?.rich_text.length > 0 && (
              <p className="text-grey font-poppins text-sm select-none">
                {properties?.description?.rich_text[0]?.plain_text.slice(0,100)}...
              </p>
            )}
          </div>
          <Link href={`/blogs/${properties?.slug?.formula?.string}`}>
            <a className="text-white font-normal mt-1 tracking-tight outline-none w-28">
              Read More {">>"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardBlogs
