import axios from "axios";

export const getData = async () => {
  const res = await axios.get("http://localhost:3001/posts/")
  return res.data;
};

export const getPaginateData = async (page: number) => {
  const res = await axios.get(`http://localhost:3001/posts?page=${page}`)
  return res.data;
};