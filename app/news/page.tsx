"use client"

import Heading from "@/components/layouts/heading/heading";
import React, { useEffect, useState } from "react";
import { PostPaginate } from "./type";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { handleToDate } from "./[id]/page";
import Body from "@/components/layouts/body/body";
import { Button } from "@/components/ui/button";
import Loading from "@/components/layouts/loading/loading";
import PostNewsPage from "./post/page";
import axios from "axios";

const News = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData, setCurrentData] = useState<PostPaginate | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (currentPage:number) => {
      try {
        const res = await axios.get(`/api/news?page=${currentPage}`);
        console.log(res.data);
        setCurrentData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(currentPage);
  },[currentPage]);

  const paginate = (pageNum: number) => {
    setCurrentPage(pageNum);
  }
  
  if (loading) {
    return <Loading />
  }

  if (!currentData) {
    return <div>ページを読み込めませんでした。</div>;
  }
  
  const { posts,pagination } = currentData;

  return (
    <div>
      <Body>
        <Heading title="ニュース" />
        <div className="flex h-screen">
          <Table>
            <TableBody>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <TableRow
                    key={post.id}
                    className="hover:bg-gray-100 grid grid-cols-10"
                  >
                    <TableCell className="col-span-2 text-left font-medium">
                      {handleToDate(post.createdAt)}
                    </TableCell>
                    <TableCell className="col-span-8 text-lg">
                      <Link href={`/news/${post.id}`}>{post.title}</Link>
                    </TableCell>
                  </TableRow>
                ))
              ): (
                <div>
                  <p>ニュースがありません。</p>
                </div>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-between items-center">
          <Button 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            戻る
          </Button>
          <span>{currentPage}ページ目/{pagination.totalPages}</span>
          <Button 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pagination.totalPages}
          >
            次へ
          </Button>
        </div>
        <PostNewsPage />
      </Body>
    </div>
  );
};

export default News;
