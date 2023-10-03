import React from "react";
import { useEffect, useRef, useState } from "react";
import { Client } from "@livepeer/webrtmp-sdk";
import Livepeer from "livepeer-nodejs";

// const user_address = "0xb14bd4448Db2fe9b4DBb1D7b8097D28cA57A8DE9";

function CreateStream({ account, contract }) {
  const videoEl = useRef(null);
  const stream = useRef(null);
  const mounted = useRef(false);

  const [url, setUrl] = useState("");
  const livepeerObject = new Livepeer("50dd5fb8-e147-4755-aeb6-46a622eb7478");

  const getStreams = async () => {
    const streams = await livepeerObject.Stream.getAll({ isActive: false });
    console.log(streams);
  };

  const startStream = async () => {
    videoEl.current.volume = 0;

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
      console.log("Stream started.");
      alert("Stream started; visit Livepeer Dashboard.");
    });

    session.on("close", () => {
      console.log("Stream stopped.");
    });

    session.on("error", (err) => {
      console.log("Stream error.", err.message);
    });

    // console.log(title);
    // console.log(des);
    // console.log(add);
    // console.log(record);
  };

  const closeStream = async () => {
    window.location.reload();
    // session.close();
  };

  useEffect(() => {
    if (!mounted) {
      closeStream();
    }
  }, [mounted]);
  const hero_Image = useRef(null);

  return (
    <>
      <div>
        <div className="cs-left-container">
          <video className="cs-video" ref={videoEl} controls />

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={startStream}
            >
              Start
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={closeStream}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateStream;
