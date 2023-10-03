import React from "react";
import "../../styles/dashboard/MainDashboard.css";
import NavigationInDash from "./NavigationInDash";

function UserDashboard() {
  return (
    <>
      <div className="DashboardPageMainClass text-black">
        <div className="Dashboard-head">
          <b className="Dashboard-head-name mt-3 mb-2 text-white">My Library</b>
        </div>
        <div className="mt-3 mb-3">
          <hr />
        </div>
        <div className="navInDashMainClass">
          <NavigationInDash />
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
