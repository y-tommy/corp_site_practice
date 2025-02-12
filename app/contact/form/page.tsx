"use client";

import Heading from "@/components/layouts/heading/heading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";
import { postAction } from "./postAction";
import { useFormState, useFormStatus } from "react-dom";
import Body from "@/components/layouts/body/body";
import Input from "@/components/layouts/input/input";
import { Loader2 } from "lucide-react";

export function Submit() {
  const status = useFormStatus();
  return (
    <Button type="submit" disabled={status.pending}>
      {status.pending ? (
        <div className="flex">
          <Loader2 className="animate-spin" />
          送信中...
        </div>
        ) : "送信"}
    </Button>
  );
}

const ContactForm = () => {
  const [result, dispatch] = useFormState(postAction, {});
  return (
    <Body>
      <Heading title="フォーム" />
      <div className="flex h-screen">
        <form action={dispatch}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {result.errors && <div className="text-red-500">{result.errors.name}</div>}
              <Label htmlFor="name">名前</Label>
              <Input name="name" placeholder="名前" />
            </div>
            <div className="flex flex-col space-y-1.5">
              {result.errors && <div className="text-red-500">{result.errors.email}</div>}
              <Label htmlFor="email">Eメール</Label>
              <Input name="email" placeholder="XXX@example.com" />
            </div>
          </div>
          <Submit />
        </form>
      </div>
    </Body>
  );
}

export default ContactForm;