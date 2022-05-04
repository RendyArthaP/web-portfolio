import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "~/public/Logo.png";

const Navbar = () => {
  return (
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
    </div>
  );
};

export default Navbar;
