"use server";

import { redirect } from "next/navigation";

export async function postAction(prev: any, formData: FormData) {
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
