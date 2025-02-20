"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { errorNewsType } from "../type";

export const postNewsAction = async(prev: errorNewsType, formData: FormData) => {
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

  const data = {
    title: title as string,
    content: content as string,
  };

  await axios.post(`${process.env.ROOT_URL}/api/news/`,
    data
  );

  redirect("/news/thanks");
}
