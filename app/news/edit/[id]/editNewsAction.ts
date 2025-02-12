"use server";

import { editNewsData } from "@/app/api/news/route";
import { redirect } from "next/navigation";

type errorNewsType = {
  errors?: {
    title?:string;
    content?:string;
  }
};

export const editNewsAction = async(id:string, prev: errorNewsType, formData: FormData) => {
  const title = formData.get("title");
  const content = formData.get("content");
  if (!title && !content) {
    return {
      errors: {
        title: "タイトルを入力してください。",
        content: "本文を入力してください。"
      }
    };
  } else if (!title) {
    return {
      errors: {
        title: "タイトルを入力してください。"
      }
    };
  } else if (!content) {
    return {
      errors: {
        content: "本文を入力してください。"
      }
    };
  }

  editNewsData(id,formData);

  redirect("/news/thanks");
}
