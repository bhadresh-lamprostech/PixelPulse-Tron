import React from "react";
import mainBg from "../assets/mainbg.png";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default () => {
  return (
    <>
      <div
        className="relative sm:-8"
        style={{
          backgroundImage: `url(${mainBg})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="sm:flex hidden mr-2 relative">
          <Sidebar />
        </div>

        <div className="flex-1 max-sm:w-full mac-w-[1280px] mx-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
