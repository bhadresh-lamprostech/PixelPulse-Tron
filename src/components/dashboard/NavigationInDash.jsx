import React, { useState, useRef } from "react";
import MyVideosPage from "./MyVideosPage";
import WorkspacesPage from "./WorkspacesPage";
import "../../styles/dashboard/NavigationInDash.css";

import { Client } from "@livepeer/webrtmp-sdk";
import Livepeer from "livepeer-nodejs";
import uploadIcon from "/src/assets/upload.png";
import closeIcon from "/src/assets/cancel.png";
import { useNavigate } from "react-router-dom";

const NavigationInDash = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [currentPage, setCurrentPage] = useState("MyVideos");
  const [popupOpen, setPopupOpen] = useState(false);
  const [streaming, setStreaming] = useState(false); // Renamed recording to streaming
  // const [stream, setStream] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [saveRecording, setSaveRecording] = useState(false);
  const [recordingName, setRecordingName] = useState("");
  const [recordingDescription, setRecordingDescription] = useState("");
  const [saveLocation, setSaveLocation] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [contentCid, setContentCid] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  const [btndisable, setbtndisable] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const navItems = [
    { label: "My Videos", page: "MyVideos" },
    { label: "Workspaces", page: "Workspaces" },
  ];

  const handleItemClick = (index, page) => {
    setActiveItem(index);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "MyVideos":
        return <MyVideosPage />;
      case "Workspaces":
        return <WorkspacesPage />;
      default:
        return <MyVideosPage />;
    }
  };

  const videoEl = useRef(null);
  const stream = useRef(null);
  const mounted = useRef(false);

  const [url, setUrl] = useState("");
  const livepeerObject = new Livepeer("50dd5fb8-e147-4755-aeb6-46a622eb7478");

  const getStreams = async () => {
    const streams = await livepeerObject.Stream.getAll({ isActive: false });
    console.log(streams);
  };

  const handleNewVideoClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setVideoUrl(null);
    setSaveRecording(false);
    setShowSaveBtn(false);
  };

  const startStream = async () => {
    // videoEl.current.volume = 0;

    stream.current = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
      screen: true,
    });
    videoEl.current.srcObject = stream.current;
    videoEl.current.play();

    console.log(stream.current);

    // console.log(stream.current.active);
    const stream_ = await livepeerObject.Stream.create({
      name: "test_stream",
      profiles: [
        {
          name: "720p",
          bitrate: 2000000,
          fps: 30,
          width: 1280,
          height: 720,
        },
        {
          name: "480p",
          bitrate: 1000000,
          fps: 30,
          width: 854,
          height: 480,
        },
        {
          name: "360p",
          bitrate: 500000,
          fps: 30,
          width: 640,
          height: 360,
        },
      ],
    });

    console.log(stream_);
    console.log(stream_.streamKey);

    console.log(stream_.id);
    stream_.setRecord(true);
    const current_stream = await livepeerObject.Stream.get(stream_.id);
    console.log("video id" + stream_.id);
    const result = await current_stream.setRecord(true);
    console.log(result);
    const url =
      "https://livepeercdn.com/hls/" + stream_.playbackId + "index.m3u8";
    setUrl(url);
    const streamKey = stream_.streamKey;

    // if (!stream.current) {
    //   alert("Video stream was not started.");
    // }

    if (!streamKey) {
      alert("Invalid streamKey.");
      return;
    }

    const client = new Client();

    const session = client.cast(stream.current, streamKey);

    session.on("open", () => {
      console.log("Ongoing Stream started.");
      alert("Ongoing Stream started; visit Livepeer Dashboard.");
      setStreaming(true); // Set streaming state to true when the stream starts
    });

    session.on("close", () => {
      console.log("Ongoing Stream stopped.");
      setStreaming(false); // Set streaming state to false when the stream stops
    });

    session.on("error", (err) => {
      console.log("Ongoing Stream error.", err.message);
    });
  };

  const closeStream = async () => {
    window.location.reload();
    setStreaming(false); // Set streaming state to false when the stream stops
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleCloseAndReload = async (e) => {
    setPopupOpen(false);
    window.location.reload();
  };

  return (
    <>
      <div className="dash-navbar-container">
        <div className="dash-navbar navInDashListItemsClass">
          <div className="dash-navbar-names text-white">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index, item.page)}
                className={`nav-button ${activeItem === index ? "active" : ""}`}
              >
                {item.label}
                <span className="underline"></span>
              </button>
            ))}
          </div>
          <button className="new-video-btn" onClick={handleNewVideoClick}>
            + New Video
          </button>
        </div>
        <div className="">{renderPage()}</div>
      </div>

      {popupOpen && (
        <div className="RecordingSaveFormDetailsClass  z-30 top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="RecordingSaveFormDetailsClass-sub flex mx-auto p-6">
            <div className="saveRecordingPreview">
              {!streaming ? (
                <>
                  <h3 className="text-lg font-bold mb-4">Start Stream</h3>

                  <video className="my-3 h-[200px]" ref={videoEl} controls />
                  <button
                    className="startBtnClass px-4 py-2 text-white mr-3"
                    onClick={startStream}
                  >
                    Start Ongoing Stream
                  </button>
                </>
              ) : (
                <button
                  className="stopBtnClass px-4 py-2 text-white mr-3"
                  onClick={closeStream}
                >
                  Stop Ongoing Stream
                </button>
              )}

              {showSaveBtn && (
                <button
                  className="saveRecBtnClass px-4 py-2 text-white ml-2"
                  onClick={() => {
                    setSaveRecording(true);
                  }}
                >
                  Save
                </button>
              )}
            </div>
            <div className="saveRecordingForm">
              {saveRecording && (
                <div className="save-form">
                  <h3>Save Recording</h3>
                  <form onSubmit={handleFormSubmit}>
                    <input
                      placeholder="Enter Name"
                      className="SaveRecordingInputFields"
                      id="recording-name"
                      type="text"
                      value={recordingName}
                      onChange={(e) => setRecordingName(e.target.value)}
                    />

                    <input
                      placeholder="Enter Description..."
                      className="SaveRecordingInputFields"
                      id="recording-description"
                      type="textarea"
                      value={recordingDescription}
                      onChange={(e) => setRecordingDescription(e.target.value)}
                    />

                    <select
                      className="SaveRecordingInputFields"
                      id="save-location"
                      value={saveLocation}
                      onChange={(e) => setSaveLocation(e.target.value)}
                    >
                      <option value="">Select location</option>
                      <option value="personal">Save in Personal</option>
                      <option value="workspace">Save in Workspace</option>
                    </select>

                    {saveLocation === "workspace" && (
                      <div>
                        <input
                          placeholder="Enter Workspace Name"
                          className="SaveRecordingInputFields"
                          id="workspace-name"
                          type="text"
                          value={workspaceName}
                          onChange={(e) => setWorkspaceName(e.target.value)}
                        />
                      </div>
                    )}

                    <div className="flex  justify-end">
                      {contentCid ? (
                        <button
                          type="submit"
                          onClick={() => handleCloseAndReload()}
                        >
                          close popup
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="flex"
                          onClick={() => contentUpload()}
                          disabled={btndisable}
                        >
                          {btnloading ? (
                            <svg
                              width="48"
                              height="15"
                              viewBox="0 0 38 38"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="#fff"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <g transform="translate(1 1)" strokeWidth="4">
                                  <circle
                                    strokeOpacity=".5"
                                    cx="18"
                                    cy="18"
                                    r="18"
                                  />
                                  <path d="M36 18c0-9.94-8.06-18-18-18">
                                    <animateTransform
                                      attributeName="transform"
                                      type="rotate"
                                      from="0 18 18"
                                      to="360 18 18"
                                      dur="1s"
                                      repeatCount="indefinite"
                                    />
                                  </path>
                                </g>
                              </g>
                            </svg>
                          ) : (
                            <>
                              <img
                                src={uploadIcon}
                                className="h-[20px] w-[20px] mr-1"
                                alt=""
                              />
                              <span>Upload</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </div>
            <button
              className=" absolute top-4 right-4 px-2 py-1 text-white"
              onClick={handleClosePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationInDash;
