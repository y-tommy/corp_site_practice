"use server";

import { redirect } from "next/navigation";

export type ReturnType = {
  errors?: {
    name?: string;
    email?: string;
  }
};

export async function postAction(prev: ReturnType, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  if (!name && !email) {
    return {
      errors: {
        name: "名前を入力してください。",
        email: "Eメールを入力してください。"
      }
    };
  } else if (!name) {
    return {
      errors: {
        name: "名前を入力してください。"
      }
    };
  } else if (!email) {
    return {
      errors: {
        email: "Eメールを入力してください。"
      }
    };
  }

  redirect("/contact/form/thanks");
}
