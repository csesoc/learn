import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Logo } from "./Logo";

const NavItem = ({ children, href }: PropsWithChildren<{ href: string }>) => (
  <Link href={href}>
    <a className="text-whiteA-12 hover:text-blue-11 transition-colors ease-linear">
      {children}
    </a>
  </Link>
);

/**
 * Root navigation menu shown at top of all pages.
 * TODO: Refactor to source items from CMS.
 */
const Navigation = () => (
  <NavigationMenu.Root>
    <NavigationMenu.List className="bg-blackA-12 text-whiteA-12 border-b-1 border-l-whiteA-12 flex h-10 w-full items-center justify-start space-x-10 px-1">
      <NavItem href="/">
        <Logo />
      </NavItem>
      <NavItem href="/articles">Articles</NavItem>
      <NavItem href="/videos">Videos</NavItem>
      <NavItem href="/creators">Creators</NavItem>
      <NavItem href="/about">About</NavItem>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);

export default Navigation;
