import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Tabbar: FC<Props> = ({ children }) => {
  return (
    <div className="bg-dark-blue rounded-xl bottom-0 z-50 p-4 w-full fixed h-16 md:hidden">
      <div className="flex flex-row justify-between">{children}</div>
    </div>
  );
};

export default Tabbar;
