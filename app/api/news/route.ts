"use server";

import { prisma } from "@/lib/prismaClient";
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