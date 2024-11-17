import React from "react";
import ServiceCard from "./serviceCard";
import Heading from "@/components/layouts/heading/heading";
import Body from "@/components/layouts/body/body";

const Service = () => {
  return (
    <Body>
      <Heading title="サービス紹介" />
      <div className="flex">
        <ServiceCard />
      </div>
    </Body>
  );
}

export default Service;
