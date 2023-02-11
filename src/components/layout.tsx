import React from "react";
import Keyboard from "../images/keyboard.svg";

export default function Layout({ children }) {
  return (
    <div className="h-[100vh]">
      <div className="w-[850px] mx-auto pt-10 pb-36 relative">
        {children}
      <Keyboard className="absolute right-0 opacity-20 top-0 mt-12 hover:opacity-100" />
      </div>
    </div>
  );
};
