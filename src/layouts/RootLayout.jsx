import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-[#0e0c16] text-[#ececec]">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
          <span>ChatGPT</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
