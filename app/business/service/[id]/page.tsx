import React from "react";
import { serviceItems } from "../serviceItems";
import Body from "@/components/layouts/body/body";

export type ServiceDetail = {
  id: number;
  title: string;
  detail: string;
  content: string;
};

const ServiceDetails = async ({ params }:{ params: { id: string } }) => {
  const serviceDetailPage = serviceItems.find((item) => item.id === parseInt(params.id) );
  return (
    <Body>
      <h1 style={{whiteSpace: "pre-line"}} key={serviceDetailPage.id}>{serviceDetailPage.content}</h1>
    </Body>
  );
}

export default ServiceDetails;
