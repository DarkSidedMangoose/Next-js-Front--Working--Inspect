"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center  ">
      <div className="w-1/4 h-1/4 flex flex-col">
        <div className=" flex justify-center items-center">{error.message}</div>
        <div className="w-full flex justify-center items-center ">
          <button
            className="flex justify-center items-center w-[150px] h-[50px] border-2 border-black"
            onClick={reset}
          >
            try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
