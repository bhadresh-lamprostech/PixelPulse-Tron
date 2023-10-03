import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/videoPages/VideoDetailsPage.css";
import ChatComponent from "./ChatComponent";

function VideoDetailsPage() {
  const location = useLocation();
  const videoId = location.state.data;
  console.log(videoId);

  return (
    <>
      <div className="videoDetailsMainClass_flexComp flex">
        <div className="videoDetailsMainClass">
          <div className="video-container">
            <div className="iframeforborder">
              <video
                className="iframeMainClass"
                src={`https://gateway.lighthouse.storage/ipfs/${videoId.content_cid}`} // Change with our link
                // `https://gateway.lighthouse.storage/ipfs/${video.content_cid}`
                title=""
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                controls
              ></video>
            </div>
          </div>
          {/* <div className="video-details p-4">
            <h4>{videoId.workspaceName}</h4>
            <h4>{videoId.title}</h4>
            <p>{videoId.description}</p>
          </div> */}
          <div className="video-details">
            <h4 className="workspace-name">{videoId.workspace_name}</h4>
            <h4 className="title">{videoId.video_name}</h4>
            <p className="description">{videoId.video_desc}</p>
          </div>
          <div className="comment-section">
            {/* Add your comment section components here */}
          </div>
        </div>
        <div className="videoDetailsMainClass_second">
          <div className="text-[#d61e5e] flex text-center justify-center">
            <b>WORKSPACE CHAT</b>
          </div>
          <ChatComponent />
        </div>
      </div>
    </>
  );
}

export default VideoDetailsPage;
