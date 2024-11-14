"use client";

import React from "react";
import Link from "next/link";
import ToggleMenu from "./menu/toggleMenu";
import HeaderMenu from "./menu/headerMenu";

const Header = () => {
  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold text-foreground">会社名が入ります</span>
            </Link>
          </div>
          <HeaderMenu />
          <ToggleMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;