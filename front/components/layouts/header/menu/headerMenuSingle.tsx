import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react"

const HeaderMenuSingle = () => {
  return (
    <NavigationMenuItem className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
      <Link href="/news" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          ニュース
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default HeaderMenuSingle;
