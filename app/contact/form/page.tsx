import Heading from "@/components/layouts/heading/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <Heading title="フォーム" />
      <div className="flex h-screen">
        <p>ここにメッセージが出ます。<br />フォーム作ります</p>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="名前" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Eメール</Label>
              <Input id="e-mail" placeholder="XXX@example.com" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
