import { useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="h-full flex flex-col items-center">
      <div className="flex-1 flex flex-col items-center justify-center w-[50%] gap-12">
        <div className="flex items-center gap-5 opacity-[0.2]">
          <img src="/logo.png" alt="logo" className="w-16 h-16" />
          <h1 className="text-[64px] bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent lg:text-[64px]">
            Chat GPT
          </h1>
        </div>
        <div className="w-full flex items-center justify-between gap-12">
          {/* Box 1: Create a New Chat */}
          <div className="flex flex-col gap-2 font-normal text-xs p-5 border border-gray-500 flex-1 rounded-lg items-center min-h-[150px]">
            <img
              src="/chat.png"
              alt="chat"
              className="w-10 h-10 object-cover"
            />
            <span>Create a New Chat</span>
          </div>

          {/* Box 2: Analyze Images */}
          <div className="flex flex-col gap-2 font-normal text-xs p-5 border border-gray-500 flex-1 rounded-lg items-center min-h-[150px]">
            <img
              src="/image.png"
              alt="image"
              className="w-10 h-10 object-cover"
            />
            <span>Analyze Images</span>
          </div>

          {/* Box 3: Help me with my Code */}
          <div className="flex flex-col gap-2 font-normal text-xs p-5 border border-gray-500 flex-1 rounded-lg items-center min-h-[150px]">
            <img
              src="/code.png"
              alt="code"
              className="w-10 h-10 object-cover"
            />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>

      <div className="mt-auto rounded-md flex justify-center w-[50%]">
        {/* Input form with arrow inside the input */}
        <form className="relative w-full mb-5">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="rounded-xl w-full outline-none border-none p-3 pl-5 bg-[#2c2937] text-[#ececec]"
          />
          {/* Arrow button positioned inside the input */}
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 border-none cursor-pointer bg-[#605e68] rounded-full"
          >
            <img src="/arrow.png" alt="arrow" className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
