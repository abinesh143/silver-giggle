"use client";

import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const CommonDrawer = (props) => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div
      id={props.drawerId}
      className="fixed bottom-0 left-0 right-0 z-40 w-full p-4 sm:p-6 overflow-y-auto rounded-t-2xl transition-transform bg-white transform-none"
      tabIndex="-1"
      aria-labelledby="drawer-bottom-label"
    >
      {props.children}
    </div>
  );
};

export default CommonDrawer;
