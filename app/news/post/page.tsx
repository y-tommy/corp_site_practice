"use client";

import { Submit } from "@/app/contact/form/page";
import Heading from "@/components/layouts/heading/heading";
import Input from "@/components/layouts/input/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useFormState } from "react-dom";
import { postNewsAction } from "./postNewsAction";
import TextArea from "@/components/layouts/textarea/textarea";

const PostNewsPage = () => {
  const [result, dispatch] = useFormState(postNewsAction, {});

  return (
    <div>
      <Heading title="フォーム" />
      <div className="flex">
        <form action={dispatch}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {result.errors && <div className="text-red-500">{result.errors.title}</div>}
              <Label htmlFor="title">タイトル</Label>
              <Input name="title" placeholder="タイトル" />
            </div>
            <div className="flex flex-col space-y-1.5">
              {result.errors && <div className="text-red-500">{result.errors.content}</div>}
              <Label htmlFor="content">本文</Label>
              <TextArea name="content" placeholder="本文" />
            </div>
          </div>
          <Submit />
        </form>
      </div>
    </div>
  )
};

export default PostNewsPage;