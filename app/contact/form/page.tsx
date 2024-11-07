import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="ml-2 text-xl font-bold text-foreground border-l-4 border-sky-600 pl-2">フォーム</h1>
      </div>
      <div className="flex h-screen">
        <p>ここにメッセージが出ます。<br />フォーム作ります</p>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
