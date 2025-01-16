"use client"

import Heading from "@/components/layouts/heading/heading";
import React, { useEffect, useState } from "react";
import { Pagination, Post } from "./type";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { handleToDate } from "./[id]/page";
import Body from "@/components/layouts/body/body";
import { getData, getPaginateData } from "../api/news/route";
import { Button } from "@/components/ui/button";
import Loading from "./loading";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setCurrentData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);
  const paginate = async (pageNum: number) => {
    const data = await getPaginateData(pageNum);
    setCurrentData(data);
    setCurrentPage(pageNum);
  }
  const posts: Post[] = currentData.posts;
  const pagination: Pagination[] = currentData.pagination;

  if (loading) {
    return <Loading />
  }

  return (
    <Body>
      <Heading title="ニュース" />
      <div className="flex h-screen">
        <Table>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.id}
                className="hover:bg-gray-100 grid grid-cols-10"
              >
                <TableCell className="col-span-2 text-left font-medium">
                  {handleToDate(post.created_at)}
                </TableCell>
                <TableCell className="col-span-8 text-lg">
                  <Link href={`/news/${post.id}`}>{post.title}</Link>
                </TableCell>
              </TableRow>
            ))}
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
        <span>{currentPage}ページ目/{pagination.total_pages}</span>
        <Button 
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pagination.total_pages}
        >
          次へ
        </Button>
      </div>
    </Body>
  );
};

export default News;
