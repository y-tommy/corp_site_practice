import React from "react";
import { serviceItems } from "../serviceItems";

export type ServiseDetail = {
  id: number;
  title: string;
  detail: string;
  content: string;
};

const ServiceDetails = async ({ params }:{ params: { id: string } }) => {
  const serviceDetailPage = serviceItems.find(item => item.id === parseInt(params.id) );
  return (
    <div>
      <h1 style={{whiteSpace: "pre-line"}} key={serviceDetailPage.id}>{serviceDetailPage.content}</h1>
    </div>
  );
}

export default ServiceDetails;
