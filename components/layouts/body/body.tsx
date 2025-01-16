import React from "react"

const Body = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export default Body;