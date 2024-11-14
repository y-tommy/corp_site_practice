import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import React from "react";
import { FAQItems } from "./FAQItems";
import Heading from "@/components/layouts/heading/heading";

const Faq = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
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
    </div>
  );
}

export default Faq;
