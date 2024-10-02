import React from "react";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="flex flex-col h-full">
      <span className="text-xs font-semibold mb-1">DASHBOARD</span>
      <Link to="/dashabord" className="p-1 rounded-md hover:bg-gray-500">
        Create a new Chat
      </Link>
      <Link className="p-1 rounded-md hover:bg-gray-500">Explore GPT AI</Link>
      <Link className="p-1 rounded-md hover:bg-gray-500">Contact </Link>
      <hr className="border-none h-[2px] bg-[#ddd] opacity-[0.1] rounded-md my-4" />
      <span className="text-xs font-semibold mb-2">RECENT CHATS</span>
      <div className="flex overflow-scroll flex-col">
        <Link className="p-1 rounded-md hover:bg-gray-500">My chat title</Link>
        <Link className="p-1 rounded-md hover:bg-gray-500">My chat title</Link>
        <Link className="p-1 rounded-md hover:bg-gray-500">My chat title</Link>
        <Link className="p-1 rounded-md hover:bg-gray-500">My chat title</Link>
        <Link className="p-1 rounded-md hover:bg-gray-500">My chat title</Link>
        <Link className="p-1 rounded-md hover:bg-gray-500">My chat title</Link>
      </div>
      <hr className="border-none h-[2px] bg-[#ddd] opacity-[0.1] rounded-md my-5" />
      <div className="mt-auto flex items-center gap-2 text-xs">
        <img src="/logo.png" alt="logo" className="h-6 w-6" />
        <div className="flex flex-col">
          <span>Upgrade to GPT AI Pro</span>
          <span className="text-gray-500">
            Get unlimited access to all features
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
