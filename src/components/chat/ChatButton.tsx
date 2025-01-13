import React from "react";

export default function ChatButton({ setIsChatOpen }: any) {
  return (
    <div
      onClick={() => setIsChatOpen(true)}
      className="w-[56px] cursor-pointer h-[56px] rounded-full bg-gradient-to-r from-[#0D1A73] to-[#45D8FF] flex justify-center items-center shadow-[0px_4px_12px_0px_#00000014]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 5.25H21M3 5.25V18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18V5.25M3 5.25L12 13.5L21 5.25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
