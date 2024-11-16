import React from "react";
import { Post } from "../type";
import Heading from "@/components/layouts/heading/heading";

export async function getDetailData(id: string) {
  const res = await fetch(`http://localhost:3001/posts/${id}/`, {
    cache: "no-store"
  });
  return res.json();
}

export const handleToDate = (day: string) =>{
  const date = new Date(day);
  const japanDate = date.getFullYear()+"年"+(date.getMonth()%12+1)+"月"+date.getDate()+"日"
  return japanDate;
}

const NewsDetails = async ({ params }:{ params: { id: string } }) => {
  const post: Post = await getDetailData(params.id);
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <Heading title="ニュース" />
      <h1 className="text-4xl py-8">{post.title}</h1>
      <p className="text-xs py-4">{handleToDate(post.updated_at)}</p>
      <p className="text-lg py-4">{post.content}</p>
    </div>
  );
}

export default NewsDetails;
