import React, { useEffect, useRef } from "react";
import NewPrompt from "../components/newPrompt";

const Chat = () => {
  const messages = [
    {
      type: "ai",
      text: "Text message AIasdkjf;lasjd;fljas;dlfjkasdfasdfsdasdfasdfasdfasdfasdfasdfas",
    },
    {
      type: "user",
      text: "from Usersdf;lkjas;ldkjf;alsjdf;lakjsd;lfjkas;sdjf;alskjdf;lajsd;lfjass;ljkasdfa;sldjf;lajs;dfja;sdjf",
    },
    { type: "ai", text: "from Ai" },
    { type: "user", text: "from User" },
    { type: "ai", text: "Text message AI" },
    { type: "user", text: "from User" },
    { type: "ai", text: "from Ai" },
    { type: "user", text: "from User" },
    { type: "ai", text: "Text message AI" },
    { type: "user", text: "from User" },
    { type: "ai", text: "from Ai" },
    { type: "user", text: "from User" },
    { type: "ai", text: "Text message AI" },
    { type: "user", text: "from User" },
    { type: "ai", text: "from Ai" },
    { type: "user", text: "from User" },
    { type: "ai", text: "Text message AI" },
    { type: "user", text: "from User" },
    { type: "ai", text: "from Ai" },
    { type: "user", text: "from User" },
  ];
  return (
    <div className="h-full flex flex-col items-center relative">
      <div className="flex-1 overflow-scroll w-full flex justify-center">
        <div className="w-[50%] flex flex-col gap-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-3xl break-words ${
                message.type === "ai"
                  ? "bg-gray-300  self-start" // AI message (left-aligned)
                  : "bg-[#2c2937] self-end max-w-[80%]" // User message (right-aligned)
              }`}
            >
              {message.text}
            </div>
          ))}
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default Chat;
