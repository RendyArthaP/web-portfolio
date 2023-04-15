import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Tabbar: FC<Props> = ({ children }) => {
  return (
    <div className="bg-dark-blue bottom-0 z-50 py-4 px-2 w-full fixed h-16 md:hidden">
      <div className="flex flex-row justify-between mx-auto max-w-lg">
        {children}
      </div>
    </div>
  );
};

export default Tabbar;
