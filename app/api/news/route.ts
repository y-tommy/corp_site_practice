"use server";

import { Post, PostPaginate } from "@/app/news/type";
import axios from "axios";
import { redirect } from "next/navigation";

export const getData = async () => {
  const res = await axios.get<PostPaginate>(`${process.env.API_ENDPOINT}/posts/`);
  return res.data;
};

export const getPaginateData = async (page: number) => {
  const res = await axios.get<PostPaginate>(`${process.env.API_ENDPOINT}/posts?page=${page}`)
  return res.data;
};

export const getDetailData = async (id: string) => {
  const res = await axios.get<Post>(`${process.env.API_ENDPOINT}/posts/${id}`);
  return res.data;
};

export const postNewsData = async (formData: FormData) => {
  const title = formData.get("title");
  const content = formData.get("content");
  await axios.post(`${process.env.API_ENDPOINT}/posts/`, {
    title: title,
    content: content
  });
};

export const deleteDetailData = async (id: string) => {
  await axios.delete(`${process.env.API_ENDPOINT}/posts/${id}`);
  redirect("/news");
}

export const editNewsData = async (id:string, formData: FormData) => {
  const title = formData.get("title");
  const content = formData.get("content");
  await axios.put(`${process.env.API_ENDPOINT}/posts/${id}`, {
    title: title,
    content: content
  });
}