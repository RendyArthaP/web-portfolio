import React, { FC, ReactNode } from "react";
import HomeInactive from "~/public/icons/tabbar/inactive/home-inactive.svg";
import BlogsInactive from "~/public/icons/tabbar/inactive/blogs-inactive.svg";
import PortfolioInactive from "~/public/icons/tabbar/inactive/portfolio-inactive.svg";
import HomeActivate from "~/public/icons/tabbar/active/home-active.svg";
import BlogsActivate from "~/public/icons/tabbar/active/blogs-active.svg";
import PortfolioActivate from "~/public/icons/tabbar/active/portfolio-active.svg";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import Tabbar from "../Tabbar/Tabbar";
import TabbarItem from "../Tabbar/TabbarItem";
import { tabbarActive } from "../../utils/tabbarActive";
import {
  activeHome,
  activeBlogs,
  activePortfolio,
} from "../../constants/activeTabbar";
import Container from "./Container";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const routerPath = router.pathname;

  return (
    <div>
      <header>
        <div>
          <Navbar />
          <Tabbar>
            <TabbarItem
              active={tabbarActive(routerPath, activeHome)}
              iconActive={HomeActivate}
              iconInactive={HomeInactive}
              router="/"
              title="Home"
            />
            <TabbarItem
              active={tabbarActive(routerPath, activeBlogs)}
              iconActive={BlogsActivate}
              iconInactive={BlogsInactive}
              router="/blogs"
              title="Blogs"
            />
            <TabbarItem
              active={tabbarActive(routerPath, activePortfolio)}
              iconActive={PortfolioActivate}
              iconInactive={PortfolioInactive}
              router="/portfolio"
              title="Portfolio"
            />
          </Tabbar>
        </div>
      </header>
      <Container>{children}</Container>
      <footer />
    </div>
  );
};

export default Layout;
