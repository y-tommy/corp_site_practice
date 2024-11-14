import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react"
import { footerItems } from "../../footer/footerItems";

const ToggleMenuList = ({title, index}: { title: string, index: number}) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      {footerItems[index].map((item) => (
        <AccordionContent key={item.name}>
          <Link href={item.href}>{item.name}</Link>
        </AccordionContent>
      ))}
    </AccordionItem>
  );
}

export default ToggleMenuList;
