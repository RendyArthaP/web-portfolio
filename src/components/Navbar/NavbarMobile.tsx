import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import Home from "~/public/icons/home.svg";
import Blogs from "~/public/icons/blogs.svg";
import Portfolio from "~/public/icons/portfolio.svg";
import Close from "~/public/icons/close.svg";
import ReactDOM from "react-dom";

interface Props {
  onClose: () => void;
  showNavbar: boolean;
}

const NavbarMobile: FC<Props> = ({ onClose, showNavbar }) => {
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
      {/** Background Modal Navbar */}
      <div
        className={`navbar-mask-style ${showNavbar ? "open" : "close"}`}
        onClick={onClose}
      />
      {/** End Background Modal Navbar */}

      {/** Modal Navbar */}
      <div className={`navbar-style ${showNavbar ? "open" : "close"}`}>
        <div className="pb-7 flex justify-end">
          <Image src={Close} alt="close-icon" onClick={onClose} />
        </div>
        <div className="border-b border-grey">
          <Link href="/">
            <a className="outline-none flex flex-row items-center pb-4">
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
      {/** End Modal Navbar */}
    </>
  );
};

export default NavbarMobile;
