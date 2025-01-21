"use server";

import axios from "axios";

export const getData = async () => {
  const res = await axios.get(`${process.env.API_ENDPOINT}/posts/`)
  return res.data;
};

export const getPaginateData = async (page: number) => {
  const res = await axios.get(`${process.env.API_ENDPOINT}/posts?page=${page}`)
  return res.data;
};

export const getDetailData = async (id: string) => {
  const res = await axios.get(`${process.env.API_ENDPOINT}/posts/${id}`)
  return res.data;
};