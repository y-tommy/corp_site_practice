"use client";

import React, { useEffect, useState } from "react";
import { Post } from "../type";
import Heading from "@/components/layouts/heading/heading";
import Body from "@/components/layouts/body/body";
import { getDetailData } from "@/app/api/news/route";
import Loading from "@/components/layouts/loading/loading";

export const handleToDate = (day: string) =>{
  const date = new Date(day);
  const japanDate = date.getFullYear()+"年"+(date.getMonth()%12+1)+"月"+date.getDate()+"日"
  return japanDate;
}

const NewsDetails = ({ params }:{ params: { id: string } }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const id = params.id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailData = await getDetailData(id);
        setData(detailData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);
  const post: Post[] = data;
  
  if (loading) {
    return <Loading />
  }
  
  return (
    <Body>
      <Heading title="ニュース" />
      <h1 className="text-4xl py-8">{post.title}</h1>
      <p className="text-xs py-4">{handleToDate(post.updated_at)}</p>
      <p className="text-lg py-4">{post.content}</p>
    </Body>
  );
}

export default NewsDetails;
