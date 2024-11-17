import Heading from "@/components/layouts/heading/heading";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Post } from "./type";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { handleToDate } from "./[id]/page";
import Body from "@/components/layouts/body/body";



export async function getData() {
  const res = await fetch("http://localhost:3001/posts/", {
    next: {
      revalidate: 10
    }
  });
  return res.json();
}

const News = async () => {
  const posts: Post[] = await getData();

  return (
    <Body>
      <Heading title="ニュース" />
      <Suspense fallback={<Loading />}>
        <div className="flex h-screen">
          <Table>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id} className="hover:bg-gray-100 grid grid-cols-10">
                  <TableCell className="col-span-2 text-left font-medium">{handleToDate(post.updated_at)}</TableCell>
                  <TableCell className="col-span-8 text-lg">
                    <Link href={`/news/${post.id}`}>
                      {post.title}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Suspense>
    </Body>
  );
}

export default News;
