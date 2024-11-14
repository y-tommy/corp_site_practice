import React from "react";
import { serviceItems } from "../serviceItems";

const ServiceDetails = async ({ params }:{ params: { id: string } }) => {
  const serviceDetailPage = serviceItems.find(item => item.id === parseInt(params.id) );
  return (
    <div>
      <h1 style={{whiteSpace: "pre-line"}} key={serviceDetailPage.id}>{serviceDetailPage.content}</h1>
    </div>
  );
}

export default ServiceDetails;
