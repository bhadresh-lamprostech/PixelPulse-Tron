import React from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import heroicon from "../../assets/Heroicon.png";
import logo from "../../assets/VidWeave.png";
import { useNavigate } from "react-router-dom";

const LandingPageHero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <motion.img
          className="navbar-logo"
          src={logo}
          alt="VidWeave Logo"
          style={{ transform: "scale(1.2)" }}
        />
      </nav>
      <div>
        <div className=" dark:text-rose-300 min-h-screen ">
          <div className="container flex flex-col lg:flex-row lg:justify-between">
            <div className="flex items- center justify-center p-3 ">
              <motion.img
                src={heroicon}
                alt="logo of vidweave"
                // className="object-contain w-full h-auto sm:max-h-300 lg:max-h-300 xl:max-h-112 2xl:max-h-128 lg:mx-auto lg:mr-12"
                className="bglogo"
                // style={{ maxHeight: "128px" }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex flex-col justify-center p-6 lg:w-1/2">
              <h1 className="h1-bg text-5xl font-bold">
                Empowering decentralized<br></br>
                video messaging and screen<br></br>
                recording.
              </h1>
              <br></br>
              <p className=" text-white text-xl">
                {" "}
                Seamlessly communicate and collaborate with others<br></br>
                through encrypted, peer-to-peer video sharing.
              </p>
              <br></br> <br></br>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button
                  type="button"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 text-lg font-semibold text-gray-800 bg-[#FFBC41] hover:bg-rose-500 transition-colors duration-300 rounded-md shadow"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="wavea"></div>
          <div className="wavea"></div>
          <div className="wavea"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
