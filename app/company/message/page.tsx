import React from "react";

const Message = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="ml-2 text-xl font-bold text-foreground border-l-4 border-sky-600 pl-2">社長メッセージ</h1>
      </div>
      <div className="flex h-screen">
        <p>ここにメッセージが出ます。<br />でも正直社長メッセージとか何書いたらいいかわからないというのが本音。</p>
      </div>
    </div>
  );
}

export default Message;
