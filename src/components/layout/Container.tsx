import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <main className="fadeup-animation">{children}</main>;
};

export default Container;
