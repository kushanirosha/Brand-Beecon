import React from "react";
import desktopVideo from "../public/brand beecon final.mp4";
import mobileVideo from "../public/brand beecon final.mp4";

const VideoSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden rounded-2xl my-16">
      
      {/* Desktop Video */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src={desktopVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mobile Video */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        src={mobileVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      {/*<div className="absolute inset-0 bg-black/20" />*/}

      {/* Content */}
      {/*<div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Design in Motion
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto">
            Experience creativity through motion and storytelling.
          </p>
        </div>
      </div>*/}
    </section>
  );
};

export default VideoSection;
