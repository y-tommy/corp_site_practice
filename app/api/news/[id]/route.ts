"use server";

import { Post } from "@/app/news/type";
import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string }},
) {
  const data:Post | null = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    }
  });
  return NextResponse.json(data)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string }}
) {
  const { title,content }:{ title:string, content:string } = await req.json();
  const res = await prisma.post.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      title: title,
      content: content,
    },
  });
  return NextResponse.json(res)
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string }},
) {
  await prisma.post.delete({
    where: {
      id: parseInt(params.id),
    }
  });
}