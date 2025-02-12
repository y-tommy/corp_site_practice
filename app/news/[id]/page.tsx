"use client";

import React, { useEffect, useState } from "react";
import { Post } from "../type";
import Heading from "@/components/layouts/heading/heading";
import Body from "@/components/layouts/body/body";
import { deleteDetailData, getDetailData } from "@/app/api/news/route";
import Loading from "@/components/layouts/loading/loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const handleToDate = (day: string) =>{
  const date = new Date(day);
  const japanDate = date.getFullYear()+"年"+(date.getMonth()%12+1)+"月"+date.getDate()+"日"
  return japanDate;
}

const NewsDetails = ({ params }:{ params: { id: string } }) => {
  const [data, setData] = useState<Post | null>(null);
  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailData = await getDetailData(id);
        setData(detailData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[id]);
  const post: Post | null= data;

  const handleClickDelete = () => {
    try {
      deleteDetailData(id);
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <Body>
      <Heading title="ニュース" />
      {post ? (
        <div>
          <h1 className="text-4xl py-8">{post.title}</h1>
          <p className="text-xs py-4">{handleToDate(post.updated_at)}</p>
          <p className="text-lg py-4">{post.content}</p>
          <Button variant="destructive" onClick={() => handleClickDelete()}>消去</Button>
          <Button asChild>
            <Link href={`/news/edit/${id}`}>編集</Link>
          </Button>
        </div>
      ) : (
          <Loading />
      )}
    </Body>
  );
}

export default NewsDetails;
