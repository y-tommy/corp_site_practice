import Body from "@/components/layouts/body/body";
import Heading from "@/components/layouts/heading/heading";
import React from "react";

const Message = () => {
  return (
    <Body>
      <Heading title="社長メッセージ" />
      <div className="flex h-screen">
        <p>ここにメッセージが出ます。<br />でも正直社長メッセージとか何書いたらいいかわからないというのが本音。</p>
      </div>
    </Body>
  );
}

export default Message;
