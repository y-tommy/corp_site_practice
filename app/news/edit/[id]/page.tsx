"use client";

import { Submit } from "@/app/contact/form/page";
import Heading from "@/components/layouts/heading/heading";
import Input from "@/components/layouts/input/input";
import Loading from "@/components/layouts/loading/loading";
import TextArea from "@/components/layouts/textarea/textarea";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react"
import { Post } from "../../type";
import { useFormState } from "react-dom";
import { editNewsAction } from "./editNewsAction";
import Body from "@/components/layouts/body/body";
import axios from "axios";
import { useParams } from "next/navigation";

const EditNews = () => {
  const [data, setData] = useState<Post | null>(null);
  const { id } = useParams<{id: string}>();
  const editNewsActionWithId = editNewsAction.bind(null,id);
  const [result, dispatch] = useFormState(editNewsActionWithId, { errors:{} });
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const detailData = await axios.get(`/api/news/${id}`);
        setData(detailData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[id]);


  return (
    <div>
      <Body>
        <Heading title="編集" />
        <div className="flex h-screen">
          {data ? (
            <form action={dispatch}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  {result.errors && <div className="text-red-500">{result.errors.title}</div>}
                  <Label htmlFor="title">タイトル</Label>
                  <Input name="title" placeholder="タイトル" value={data.title} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  {result.errors && <div className="text-red-500">{result.errors.content}</div>}
                  <Label htmlFor="content">本文</Label>
                  <TextArea name="content" placeholder="本文" value={data.content} />
                </div>
                <Submit />
              </div>
            </form>
          ) : (
            <Loading />
          )}
        </div>
      </Body>
    </div>
  );
}

export default EditNews;
