import Heading from "@/components/layouts/heading/heading";
import React from "react";

const BusinessAbout = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <Heading title="事業内容" />
      <div className="flex h-screen">
        <p>ここにメッセージが出ます。<br />事業内容どうやって書こうか思案中</p>
      </div>
    </div>
  );
}

export default BusinessAbout;