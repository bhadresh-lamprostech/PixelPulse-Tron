import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectKitButton } from "connectkit";
import NotificationPage from "./push/NotificationPage";

// import { useStateContext } from '../context';
import { logo, menu, search, vidWeaveLogo } from "../assets";
import { navlinks } from "../constants";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toogleDrawer, setToogleDrawer] = useState("false");

  return (
    //   style={{margin-bottom: 3%;
    //     padding-bottom: 0;
    // }}
    <div className="sm:pr-5 p-3 pb-0 mb-5 sticky top-0 z-10">
      {/*  <div className="sm:pr-5 p-4 sticky top-0 bg-[#13131a] z-10"> */}
      <div
        className="flex md:flex-row flex-col-reverse justify-between mb-[20px]
    gap-6"
      >
        {/* <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#ff83a5] rounded-[100px]"> */}
        {/* <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#a8a4a7] rounded-[100px]">
          <input
            type="text"
            placeholder="Search for workspaces"
            className="flex w-full font-epilogue font-normal
         text-[14px] placeholder:text-[#474e5e] text-black bg-transparent outline-none"
          />
          <div
            className="w-[72px] h-full rounded-[20px] bg-[#FF206E] flex justify-center
          items-center cursor-pointer"
          >
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div> */}
        <div className="sm:flex hidden flex-row justify-end gap-4 lg:flex-1 flex mr-2 mt-2">
          <ConnectKitButton />
        </div>
        {/* small screen  */}
        <div className="sm:hidden flex justify-between items-center relative">
          <div
            className="w-[40px] h-[40px] rounded-[10px]
                bg-[#2c2f32] flex justify-center items-center cursor-pointer"
          >
            <img
              src={vidWeaveLogo}
              alt="user"
              className="w-[60%] h-[60%]
                    object-contain"
            />
          </div>
          <img
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToogleDrawer((prev) => !prev)}
          />
          <div
            className={`absolute top-[60px] right-0 left-0
                bg-[#ebebf7] z-10 shadow-secondary py-4 ${
                  !toogleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
                } transition-all duration-700`}
          >
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${
                    isActive === link.name && "bg-[#a3a3bc]"
                  }`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToogleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${
                      isActive === link.name ? "grayscale-0" : "grayscale"
                    }`}
                  />
                  <p
                    className={`ml-[20px] font-epilogue font-semibold text-[14px] 
                      ${
                        isActive === link.name
                          ? "text-[#737373]"
                          : "text-[#000000]"
                      }`}
                  >
                    {link.name}
                  </p>
                </li>
              ))}

              {/* <NotificationPage /> */}
            </ul>
            <div className="flex mx-4">
              <ConnectKitButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
