import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import React from "react";
import { FAQItems } from "./FAQItems";
import Heading from "@/components/layouts/heading/heading";
import Body from "@/components/layouts/body/body";

const Faq = () => {
  return (
    <Body>
      <Heading title="FAQ" />
      <div className="flex h-screen">
        <Accordion type="single" collapsible className="w-full">
          {FAQItems.map((FaqItem) => (
            <AccordionItem key={FaqItem.id} value={FaqItem.id}>
              <AccordionTrigger>{FaqItem.title}</AccordionTrigger>
              <AccordionContent>
                {FaqItem.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Body>
  );
}

export default Faq;
