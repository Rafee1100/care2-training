"use client";
import { useState } from "react";
import ChatBody from "./ChatBody";
import ChatButton from "./ChatButton";

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="fixed bottom-[5px] right-[5px] sm:bottom-[55px] z-50 sm:right-[55px] ">
      {isChatOpen ? (
        <ChatBody setIsChatOpen={setIsChatOpen} />
      ) : (
        <ChatButton setIsChatOpen={setIsChatOpen} />
      )}
    </div>
  );
}
