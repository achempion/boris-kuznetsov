import React from "react";

export default function Layout({ children }) {
  return (
    <div className="h-[100vh]">
      <div className="w-[850px] mx-auto pt-10 pb-36">
        {children}
      </div>
    </div>
  );
};
