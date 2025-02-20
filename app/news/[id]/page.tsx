"use client";

import React, { useEffect, useState } from "react";
import { Post } from "../type";
import Heading from "@/components/layouts/heading/heading";
import Body from "@/components/layouts/body/body";
import Loading from "@/components/layouts/loading/loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

export const handleToDate = (day: Date) =>{
  const date = new Date(day);
  const japanDate = date.getFullYear()+"年"+(date.getMonth()%12+1)+"月"+date.getDate()+"日"
  return japanDate;
}

const NewsDetails = () => {
  const { id } = useParams<{id: string}>();
  const [data, setData] = useState<Post | null>(null);
  const router = useRouter();
  // 詳細ページのフェッチ
  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailData = await axios.get(`/api/news/${id}`);
        setData(detailData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[id]);
  const post: Post | null= data;

  // 削除のイベントハンドラ
  const handleClickDelete = async () => {
    try {
      await axios.delete(`/api/news/${id}`);
    } catch (error) {
      console.error(error)
    }
    router.push("/news");
  }
  
  return (
    <Body>
      <Heading title="ニュース" />
      {post ? (
        <div>
          <h1 className="text-4xl py-8">{post.title}</h1>
          <p className="text-xs py-4">{handleToDate(post.updatedAt)}</p>
          <p className="text-lg py-4">{post.content}</p>
          <div className="space-x-4">
            <Button variant="destructive" onClick={() => handleClickDelete()}>消去</Button>
            <Button asChild>
              <Link href={`/news/edit/${id}`}>編集</Link>
            </Button>
          </div>
        </div>
      ) : (
          <Loading />
      )}
    </Body>
  );
}

export default NewsDetails;
