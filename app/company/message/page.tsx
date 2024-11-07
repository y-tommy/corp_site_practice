import Heading from "@/components/layouts/heading/heading";
import React from "react";

const Message = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <Heading title="社長メッセージ" />
      <div className="flex h-screen">
        <p>ここにメッセージが出ます。<br />でも正直社長メッセージとか何書いたらいいかわからないというのが本音。</p>
      </div>
    </div>
  );
}

export default Message;
