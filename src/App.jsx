import React, { useState, useEffect } from "react";
// import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
// import mainBg from './assets/mainbg.png'
import { Sidebar, Navbar } from "./components";
import { CampaignDetails, Home, Profile } from "./pages";
import LandingPage from "./pages/Landingpage";
import RegForm from "./pages/RegForm";
import UserProfile from "./pages/UserProfile";
import MainDashboard from "./components/dashboard/MainDashboard";
import WorkspacesPage from "./components/dashboard/WorkspacesPage";
import CreateWorkspace from "./pages/CreateWorkspace";
import UserWorkspace from "./pages/UserWorkspace";
import VideoDetailsPage from "./components/videoPages/VideoDetailsPage";
import NotificationMainPage from "./pages/NotificationMainPage";
import UserRegistration from "./pages/UserRegistration";
import UserDashboard from "./components/dashboard/UserDashboard";
// import VideoDetail from "./components/videoPages/VideoDetailsPage";
import mainBg from "./assets/mainbg.png";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";

const App = () => {
  // const location = useLocation();

  // // Check if the current route is the landing page
  // const isLandingPage = location.pathname === "/" ? true : false;
  // const isRegistrationPage = location.pathname === "/user-reg" ? true : false;

  const [videos, setVideos] = useState([]); // Assuming you have a videos array

  useEffect(() => {
    // Fetch the videos from your data source and update the videos state
    const fetchVideos = async () => {
      try {
        // Fetch the videos data from your data source (e.g., API)
        const response = await fetch("your-api-endpoint-for-videos");
        const data = await response.json();

        // Update the videos state with the fetched data
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      {/* <div className="MainAppClassBg relative sm:-8 min-h-screen flex flex-row"> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/landing" />} /> */}
          <Route element={<WithoutNav />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/user-reg" element={<UserRegistration />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/library" element={<UserDashboard />} />
            <Route path="/workspace" element={<WorkspacesPage />} />
            <Route path="/create-workspace" element={<CreateWorkspace />} />
            <Route
              path="/notification-page"
              element={<NotificationMainPage />}
            />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/reg-form" element={<RegForm />} />
            <Route path="/profile-page" element={<UserProfile />} />
            <Route path="/workspace-page" element={<UserWorkspace />} />

            <Route
              path="/video-page/:videoId"
              element={<VideoDetailsPage videos={videos} />}
            />
          </Route>
          {/* <Route path="/newuser" element={<MainDashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
