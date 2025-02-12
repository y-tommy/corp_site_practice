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
  const serviceDetailPage: ServiceDetail | undefined = serviceItems.find((item) => item.id === parseInt(params.id) );
  if (serviceDetailPage === undefined) {
    // 簡単に出力してるが、404のページを作るのもあり
    return "お探しのページは見つかりません。";
  };

  return (
    <Body>
      <h1 style={{whiteSpace: "pre-line"}} key={serviceDetailPage.id}>{serviceDetailPage.content}</h1>
    </Body>
  );
}

export default ServiceDetails;
