"use server";

import { Post, PostPaginate } from "@/app/news/type";
import { prisma } from "@/lib/prismaClient";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;
  try {
    const data = await prisma.post.findMany({
      orderBy: {
        id: 'desc'
      },
      skip: offset,
      take: limit,
    });
    const totalPosts = await prisma.post.count();
  
    const totalPages = Math.ceil(totalPosts / limit);
  
    return NextResponse.json({
      posts: data,
      pagination:{
        totalPages,
        currentPage: page,
      }
    });
    
  } catch (error) {
    console.error(error);
  }
};

export async function POST(
  req:NextRequest,
) {
  const { title,content }:{ title:string, content:string } = await req.json();
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  })
  return NextResponse.json(post,{ status: 201});
};
// export const getPaginateData = async (page: number) => {
//   const res = await axios.get<PostPaginate>(`${process.env.API_ENDPOINT}/posts?page=${page}`)
//   return res.data;
// };

// export const getDetailData = async (id: string) => {
//   const res = await axios.get<Post>(`${process.env.API_ENDPOINT}/posts/${id}`);
//   return res.data;
// };

// export const postNewsData = async (formData: FormData) => {
//   const title = formData.get("title");
//   const content = formData.get("content");
//   await axios.post(`${process.env.API_ENDPOINT}/posts/`, {
//     title: title,
//     content: content
//   });
// };

// export const deleteDetailData = async (id: string) => {
//   await axios.delete(`${process.env.API_ENDPOINT}/posts/${id}`);
//   redirect("/news");
// }

// export const editNewsData = async (id:string, formData: FormData) => {
//   const title = formData.get("title");
//   const content = formData.get("content");
//   await axios.put(`${process.env.API_ENDPOINT}/posts/${id}`, {
//     title: title,
//     content: content
//   });
// }