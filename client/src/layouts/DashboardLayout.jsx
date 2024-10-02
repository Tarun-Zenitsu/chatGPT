import React from "react";
import { Outlet } from "react-router-dom";
import ChatList from "../components/chatList";

const DashboardLayout = () => {
  return (
    <div className="flex gap-12 pt-5 h-full">
      <div className="basis-1/5">
        <ChatList />
      </div>
      <div className="basis-4/5 bg-[#12101b]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
