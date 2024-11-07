import React from "react";
import ServiceCard from "./serviceCard";

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <div className="space-y-4 py-10">
        <h1 className="ml-2 text-xl font-bold text-foreground border-l-4 border-sky-600 pl-2">サービス紹介</h1>
      </div>
      <div className="flex">
        <ServiceCard />
      </div>
    </div>
  );
}

export default Service;
