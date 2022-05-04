import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface TabbarItemProps {
  active: boolean;
  iconActive: string;
  iconInactive: string;
  title: string;
  router: string;
}

const TabbarItem: FC<TabbarItemProps> = ({
  active,
  iconActive,
  title,
  iconInactive,
  router,
}) => {
  return (
    <Link href={router}>
      <div className="flex flex-col cursor-pointer">
        <Image alt="Logo Home" src={active ? iconActive : iconInactive} />
        <span
          className={
            active ? "text-sm mt-1 font-bold" : "text-sm mt-1 font-normal"
          }
        >
          {title}
        </span>
      </div>
    </Link>
  );
};
export default TabbarItem;
