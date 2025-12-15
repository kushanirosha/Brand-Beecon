import React, { useState } from "react";
import { Play, X } from "lucide-react";

const videoProjects = [
  "https://youtu.be/U5uD7dbT39A?si=YgvVwKDp73Nt9hNt", 
  "https://youtu.be/irQaUfOJ_yo?si=ao5QpSHm_jlY22EG",
  "https://youtu.be/WgZf56I1Hn0?si=gvq7__3GhB1Z57q3",
  "https://youtu.be/KapXO9GBAGY?si=M3DshjW4jr-K8IuR",
  "https://youtu.be/xMMuAvf7qlo?si=Hpt7iqBTyz0oloxB",
  "https://youtu.be/rj_n4jH7VwY?si=SFxegMAacMrmSYDU",
  "https://youtu.be/0RKgsL2EIy0?si=zxc8byIO5RowOojR",
  "https://youtu.be/DWCl2dN6hpg?si=nMKJ5bqyXAYnzoLc",
];

const ExploreVideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  };

  // Generate thumbnail URL
  const getThumbnail = (url: string) => {
    const id = getVideoId(url);
    return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "";
  };

  // Generate embed URL
  const getEmbedUrl = (url: string) => {
    const id = getVideoId(url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : "";
  };

  return (
    <>
      {/* Explore Video Design Section */}
      <div className="mt-28 text-center">
        <h3 className="text-3xl font-semibold text-[#3c405b] mb-1">
          Explore Video Design Projects
        </h3>
        <p className="text-gray-600 mb-7 text-center max-w-3xl mx-auto">
          Dive into our curated selection of video design projects that showcase
          creativity and innovation.
        </p>
      </div>

       <div className="border-t-4 border-gray-300 w-full"></div>

      {/* Masonry Grid of Videos */}
      <div className="max-w-7xl mx-auto my-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {videoProjects.map((videoUrl, index) => {
            const spanClasses = [
              "row-span-1",
              "row-span-2",
              "row-span-1",
              "row-span-2",
              "row-span-3",
              "row-span-1",
            ][index % 6]; // Random-like height variation

            return (
              <div
                key={index}
                onClick={() => setSelectedVideo(videoUrl)}
                className={`relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${spanClasses}`}
              >
                <img
                  src={getThumbnail(videoUrl)}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay + Play icon on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white drop-shadow-2xl" fill="white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              src={getEmbedUrl(selectedVideo)}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <X size={40} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreVideoSection;