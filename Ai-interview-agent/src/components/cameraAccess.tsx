"use client";

import { useEffect, useRef } from "react";

export default function CameraAccess() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    startCamera();
  }, []);
  
  useEffect(() => {
    let stream: MediaStream;

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((s) => {
        stream = s;
        if (videoRef.current) videoRef.current.srcObject = stream;
      });

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="w-full h-full rounded-lg"
    />
  );
}
