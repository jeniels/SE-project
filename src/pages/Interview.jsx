import Chatting from "@/components/Chat";
// import LiveCode from "@/components/LiveCode";
import Meet from "@/components/Meet";
import React from "react";

const Interview = () => {
  return (
    <div>
      <div className=" ">
        <div>
          <Meet />
        </div>
        <div className="border backdrop-blur-sm rounded-xl border-blue-300">
          {/* <LiveCode /> */}
          <iframe
            src="https://coderush.vercel.app/"
            className="h-screen w-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Interview;
