import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "../../styles/dashboard/MyVideosPage.css";
import axios from "axios";
import { useAccount } from "wagmi";

function MyVideosPage() {
  const { address } = useAccount();
  const walletAddress = address;
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const config = {
  //         method: "get",
  //         maxBodyLength: Infinity,
  //         url: `https://deloom.vercel.app/readpersonaldata?creator_address=${walletAddress}`,
  //         headers: {},
  //       };
  //       const response = await axios.request(config);
  //       console.log(response.data);
  //       setVideos(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [walletAddress]);

  return (
    <>
      <div className="video-page">
        <div className="video-page-container">
          <VideoCard videos={videos} />
        </div>
      </div>
    </>
  );
}

export default MyVideosPage;
