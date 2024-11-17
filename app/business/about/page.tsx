import Body from "@/components/layouts/body/body";
import Heading from "@/components/layouts/heading/heading";
import React from "react";

const BusinessAbout = () => {
  return (
    <Body>
      <Heading title="事業内容" />
      <div className="flex h-screen">
        <p>ここにメッセージが出ます。<br />事業内容どうやって書こうか思案中</p>
      </div>
    </Body>
  );
}

export default BusinessAbout;