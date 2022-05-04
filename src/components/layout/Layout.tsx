import Image from "next/image";
import React, { FC, ReactNode } from "react";
import Logo from "~/public/Logo.png";
import Link from "next/link";
import { Hamburger } from "~/public/Hamburger";
import Container from "./Container";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <div>
          <div className="flex flex-row items-center justify-between p-4 mx-auto max-w-6xl">
            <div>
              <Link href="/">
                <a className="outline-none">
                  <Image alt="Logo" height={45} src={Logo} width={45} />
                </a>
              </Link>
            </div>
            <div className="hidden md:flex md:flex-row">
              <Link href="/">
                <span className="mx-4">Home</span>
              </Link>
              <Link href="/">
                <span className="mx-4">About</span>
              </Link>
              <Link href="/">
                <span className="mx-4">Blogs</span>
              </Link>
              <Link href="/">
                <span className="ml-4">Portfolio</span>
              </Link>
            </div>
            <div className="flex md:hidden">
              <Hamburger />
            </div>
          </div>
        </div>
      </header>
      <Container>{children}</Container>
      <footer />
    </div>
  );
};

export default Layout;
