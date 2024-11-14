import React from "react";
import ServiceCard from "./serviceCard";
import Heading from "@/components/layouts/heading/heading";

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <Heading title="サービス紹介" />
      <div className="flex">
        <ServiceCard />
      </div>
    </div>
  );
}

export default Service;
