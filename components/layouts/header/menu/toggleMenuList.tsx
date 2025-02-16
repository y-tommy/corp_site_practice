import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react"
import { footerItems } from "../../footer/footerItems";

const ToggleMenuList = ({title, index,onClick}: { title: string, index: number,onClick: () => void}) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      {footerItems[index].map((item) => (
        <AccordionContent key={item.name}>
          <Link href={item.href} onClick={onClick}>{item.name}</Link>
        </AccordionContent>
      ))}
    </AccordionItem>
  );
}

export default ToggleMenuList;
