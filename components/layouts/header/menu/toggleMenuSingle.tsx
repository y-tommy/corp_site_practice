import { AccordionItem } from "@/components/ui/accordion";
import Link from "next/link";
import React from "react"

const ToggleMenuSingle = ({title, href}: { title: string, href: string}) => {
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
      " href={href}>{title}</Link>
    </AccordionItem>
  );
}

export default ToggleMenuSingle;
