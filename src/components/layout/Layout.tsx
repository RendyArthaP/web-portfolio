import React, { FC, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Container from "./Container";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="fadedown-animation">
        <Navbar />
      </header>
      <Container>{children}</Container>
      <footer className="text-center p-4 bg-dark-blue mt-4 fadedown-animation text-sm">
        Copyright @ 2023 - Developed by Rendy Artha Prawira
      </footer>
    </>
  );
};

export default Layout;
