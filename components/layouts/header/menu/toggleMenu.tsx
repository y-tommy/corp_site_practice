import React, { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import ToggleMenuSingle from "./toggleMenuSingle";
import ToggleMenuList from "./toggleMenuList";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div className="flex md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader className="hidden">
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-8">
            <Accordion type="single" collapsible className="w-full">
              <ToggleMenuSingle title="ホーム" href="/" onClick={handleCloseMenu} />
              <ToggleMenuList title="会社について" index={0} onClick={handleCloseMenu} />
              <ToggleMenuList title="事業について" index={1} onClick={handleCloseMenu} />
              <ToggleMenuList title="お問い合わせ" index={2} onClick={handleCloseMenu} />
              <ToggleMenuSingle title="ニュース" href="/news" onClick={handleCloseMenu} />
              <Button onClick={handleCloseMenu}>ここ</Button>
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ToggleMenu;
