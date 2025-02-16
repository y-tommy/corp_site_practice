import { AccordionItem } from "@/components/ui/accordion";
import Link from "next/link";
import React from "react"

const ToggleMenuSingle = ({title, href,onClick}: { title: string, href: string, onClick: () => void}) => {
  return (
    <AccordionItem value={title}>
      <Link className="
      flex
      flex-1
      items-center
      justify-between
      py-4
      font-medium
      transition-all
      hover:underline
      "
      href={href}
      onClick={onClick}>
        {title}
      </Link>
    </AccordionItem>
  );
}

export default ToggleMenuSingle;
