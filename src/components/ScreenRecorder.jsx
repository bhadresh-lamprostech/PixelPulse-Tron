import React, { useRef, useState } from 'react';

const ScreenRecorder = () => {
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [error, setError] = useState(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      setMediaStream(stream);
      videoRef.current.srcObject = stream;
      setRecording(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const stopRecording = () => {
    const tracks = mediaStream?.getTracks();
    tracks.forEach(track => track.stop());
    setMediaStream(null);
    setRecording(false);
  };

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} autoPlay muted />
      {recording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ScreenRecorder;
