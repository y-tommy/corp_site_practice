import React from "react";

const Heading = ({title}: { title: string}) => {
  return (
    <div className="space-y-4">
      <h1 className="
      ml-2
      text-xl
      font-bold
      text-foreground
      border-l-4
      border-sky-600
      pl-2
      my-4
      ">
        {title}
      </h1>
    </div>
  );
}

export default Heading;