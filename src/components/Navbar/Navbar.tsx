import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "~/public/Logo.png";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";
import { tabbarActive } from "~/src/utils/tabbarActive";
import {
  activeHome,
  activeBlogs,
  activePortfolio,
} from "~/src/constants/activeTabbar";
import HamburgerMenu from "~/public/icons/hamburger-menu.svg";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const router = useRouter();
  const routerPath = router.pathname;

  const [showNavbarMobile, setShowNavbarMobile] = useState(false);

  const handleOpenNavbarMobile = () => {
    setShowNavbarMobile(!showNavbarMobile);
  };

  return (
    <div className="flex flex-row items-center justify-between p-4 mt-2 mx-auto max-w-6xl">
      <Link href="/">
        <a className="outline-none">
          <Image alt="Logo" height={45} src={Logo} width={45} />
        </a>
      </Link>
      <div className="hidden md:flex md:flex-row">
        <NavbarItem
          router="/"
          title="Home"
          classNameActive="mx-4 font-bold cursor-pointer"
          classNameInactive="mx-4 font-normal cursor-pointer"
          active={tabbarActive(routerPath, activeHome)}
        />
        <NavbarItem
          router="/blogs"
          title="Blogs"
          classNameActive="mx-4 font-bold cursor-pointer"
          classNameInactive="mx-4 font-normal cursor-pointer"
          active={tabbarActive(routerPath, activeBlogs)}
        />
        <NavbarItem
          router="/portfolio"
          title="Portfolio"
          classNameActive="ml-4 font-bold cursor-pointer"
          classNameInactive="ml-4 font-normal cursor-pointer"
          active={tabbarActive(routerPath, activePortfolio)}
        />
      </div>
      <div className="flex md:hidden cursor-pointer">
        <Image
          src={HamburgerMenu}
          alt="hamburger-menu"
          onClick={handleOpenNavbarMobile}
        />
      </div>
      {showNavbarMobile && (
        <NavbarMobile
          onClose={() => setShowNavbarMobile(false)}
          showNavbar={showNavbarMobile}
        />
      )}
    </div>
  );
};

export default Navbar;
