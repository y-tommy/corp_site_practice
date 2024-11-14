import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { footerItems } from "../../footer/footerItems";


const HeaderMenuList = ({title, href, index}: { title: string, href: string, index: number}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
        <Link href={href}>{title}</Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {footerItems[index].map((menuList) => (
            <Link
              key={menuList.name}
              href={menuList.href}
            >{menuList.name}</Link>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default HeaderMenuList;