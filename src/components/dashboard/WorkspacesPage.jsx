import React from "react";
import VideoCard from "./VideoCard";
import "../../styles/workspace/WorkspacesPage.css";

function WorkspacesPage() {
  const videos = [
    {
      id: 4,
      title: "Lorem, ipsum dolor sit amet consectetur adip",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "John's Workspace",
    },
    {
      id: 5,
      title: "Video 5",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 1,
      title: "Video 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 2,
      title: "Video 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 3,
      title: "Video 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 6,
      title: "Video 6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 2,
      title: "Video 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 3,
      title: "Video 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor sit amet consectetur adip",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 5,
      title: "Video 5",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    {
      id: 6,
      title: "Video 6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
      workspaceName: "Workspace Name",
    },
    // Add more video objects as needed
  ];

  return (
    <>
      <div className="">
        <div className="video-page-workspace">
          <div className="video-page-container">
            <div className="WorkspacesListMainClass">
              <VideoCard videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkspacesPage;
