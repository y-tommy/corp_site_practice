import {
  NavigationMenu,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import React from "react"
import HeaderMenuList from "./headerMenuList";
import HeaderMenuSingle from "./headerMenuSingle";

const HeaderMenu = () => {
  return (
    <nav className="hidden md:flex md:space-x-8">
      <NavigationMenu>
        <NavigationMenuList>
          <HeaderMenuList title="会社について" href="/company" index={0} />
          <HeaderMenuList title="事業について" href="/business" index={1} />
          <HeaderMenuList title="お問い合わせ" href="/contact" index={2} />
          <HeaderMenuSingle />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default HeaderMenu;
