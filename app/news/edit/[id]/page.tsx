"use client";

import { getDetailData } from "@/app/api/news/route";
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

const EditNews = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<Post | null>(null);
  const id = params.id
  const editNewsActionWithId = editNewsAction.bind(null,id)
  const [result, dispatch] = useFormState(editNewsActionWithId, { errors:{} });
  console.log(result)
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const detailData = await getDetailData(id);
        setData(detailData);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  },[id]);


  return (
    <div>
      <Heading title="編集" />
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
          </div>
          <Submit />
        </form>
      ) : (
        <Loading />
      )};
    </div>
  );
}

export default EditNews;
