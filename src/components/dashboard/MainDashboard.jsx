import React, { useState } from "react";
import "../../styles/dashboard/MainDashboard.css";
import NavigationInDash from "./NavigationInDash";
import Sidebar from "../Sidebar";

function MainDashboard() {
  const [dashboard, setDashboard] = useState(true);
  const [notification, setNotification] = useState(false);
  const [workspaceProfile, setWorkspaceProfile] = useState(false);
  const [personalProfile, setPersonalProfile] = useState(false);

  const [display, setDisplay] = useState({
    dashboard: true,
    notification: false,
    workspace: false,
    profile: false,
  });

  const dashboardLinks = (a) => {
    if (a === "Dashboard") {
      setDisplay({
        dashboard: true,
        notification: false,
        workspace: false,
        profile: false,
      });
    }
    if (a === "Notification") {
      setDashboard(false);
      setNotification(true);
      setWorkspaceProfile(false);
      setPersonalProfile(false);
    } else if (a === "WorkspaceProfile") {
      setDashboard(false);
      setNotification(false);
      setWorkspaceProfile(true);
      setPersonalProfile(false);
    } else if (a === "PersonalProfile") {
      setDashboard(false);
      setNotification(false);
      setWorkspaceProfile(false);
      setPersonalProfile(true);
    }
  };

  return (
    <>
      <div className="dashboard-main">
        <div className="left-db">
          <Leftsidebar setDisplay={setDisplay} />
        </div>
        <div className="right-db"></div>
      </div>
    </>
  );
}

export default MainDashboard;
