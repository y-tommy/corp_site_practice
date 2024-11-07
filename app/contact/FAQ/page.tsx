import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import React from "react";
import { FAQItems } from "./FAQItems";

const Faq = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="ml-2 text-xl font-bold text-foreground border-l-4 border-sky-600 pl-2">FAQ</h1>
      </div>
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
