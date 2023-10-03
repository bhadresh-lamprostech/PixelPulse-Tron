import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, sun, profile, vidWeaveLogo } from "../assets";
import { navlinks } from "../constants";
import "../styles/sidebar/Sidebar.css";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handelclick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[50px] ${
      isActive && isActive === name && "bg-[#1c1818e4]"
    } flex justify-center
items-center ${!disabled && "cursor-pointer"} ${styles}`}
    onClick={handelclick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Dashboard");

  return (
    <div className="p-3">
      <div className="flex justify-between item-center ml-2 flex-col sticky top-5 h-[90vh]">
        <Link to="/">
          {/* <Icon styles="w-[52px] h-[52px] bg-[32c2f32]" imgUrl={vidWeaveLogo} /> */}
          <Icon
            className="vidWeaveLogoMainClass"
            styles="w-[76px] h-[68px] bg-[32c2f32]"
            imgUrl={vidWeaveLogo}
          />
        </Link>
        <div
          className="sidbarMainBg flex-1 flex flex-col justify-between items-center 
         w-[70px] h-[60vh] py-4 mt-12 mb-20"
        >
          <div className="flex flex-col justify-center items-center gap-3">
            {navlinks.map((link) => (
              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handelclick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
          <Icon
            className=""
            styles={"w-[48px] h-[48px] rounded-[50px] bg-[#322222e4]"}
            handelclick={() => {
              navigate("/profile-page");
            }}
            imgUrl={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
