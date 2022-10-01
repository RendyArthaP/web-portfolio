import dayjs from 'dayjs'
import Link from 'next/link'
import React, { FC } from 'react'
import { BlogCards } from '~/src/types/schema'

const CardBlogs: FC<BlogCards> = ({
  id,
  properties
}) => {
  return (
    <div
      key={id}
      className="mx-4 my-8 border border-[#BFC0C0] rounded-lg"
    >
      <div className="flex flex-col sm:flex-row">
        <img
          src={properties?.images?.files[0]?.file?.url}
          className="flex rounded-t-lg sm:rounded-lg sm:rounded-tr-none sm:rounded-br-none h-60 sm:max-w-[220px]"
        />
        <div className="p-4 flex flex-col justify-between h-60">
          <div>
            <h1 className="text-white font-bold font-nunito text-xl tracking-normal -mb-[7px]">
              {properties?.title?.title[0]?.text?.content}
            </h1>
            <span className="text-grey font-poppins text-xs mb-1">
              {dayjs(properties?.dates?.date?.start).format('MMMM D, YYYY')}
            </span>
          </div>
          <div>
            {properties?.description?.rich_text.length > 0 && (
              <p className="text-grey font-poppins text-sm select-none">
                {properties?.description?.rich_text[0]?.plain_text.slice(0,400)}...
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
