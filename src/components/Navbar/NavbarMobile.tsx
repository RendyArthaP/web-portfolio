import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import Home from "~/public/icons/home.svg";
import Blogs from "~/public/icons/blogs.svg";
import Portfolio from "~/public/icons/portfolio.svg";

interface Props {
  onClose: () => void;
  showNavbar: boolean;
}

const NavbarMobile: FC<Props> = ({ onClose, showNavbar }) => {
  const styleShowNavbar = `
    flex md:hidden bg-black fixed z-20 w-full h-screen bottom-0 overflow-hidden right-0 top-0 left-0 opacity-40
  `;

  const styleCloseNavbar = `
    flex md:hidden bg-black fixed z-20 w-full h-screen bottom-0 overflow-hidden right-0 top-0 left-0 opacity-40
  `;

  // This useEffect function for locking scroll when Navbar Mobile Open
  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.removeAttribute("style");
    };
  });

  return (
    <>
      <div
        className={showNavbar ? styleShowNavbar : styleCloseNavbar}
        onClick={onClose}
      />
      <div className="flex md:hidden bg-dark-blue flex-col fixed w-screen bottom-0 h-80 z-50 left-0 right-0 p-4 rounded-tr-xl rounded-tl-xl">
        <div className="border-b border-grey">
          <Link href="/">
            <a className="outline-none flex flex-row items-center py-4">
              <p className="text-lg tracking-wide mr-2">Home</p>
              <Image src={Home} alt="home" />
            </a>
          </Link>
        </div>
        <div className="border-b border-grey">
          <Link href="/blogs">
            <a className="outline-none flex flex-row items-center py-4">
              <p className="text-lg tracking-wide mr-2">Blogs</p>
              <Image src={Blogs} alt="home" />
            </a>
          </Link>
        </div>
        <div className="border-b border-grey">
          <Link href="/portfolio">
            <a className="outline-none flex flex-row items-center py-4">
              <p className="text-lg tracking-wide mr-2">Portofolio</p>
              <Image src={Portfolio} alt="home" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
