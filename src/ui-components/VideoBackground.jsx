import React from "react";
import "../app/VideoBackground.css"; // Optional CSS for styling
import {  HeroLayout2, NavBarHeader2 } from "@/ui-components";


export default function VideoBackground() {
  

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <NavBarHeader2 width="100%" />

      <HeroLayout2 width="100%" />

      <video
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        src="https://realmedia-stockstorage51b97-staging.s3.eu-central-1.amazonaws.com/public/Grigore-Alexandrescu-30.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}
