import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { blogs } from "../utils/Blogdata";
import { Link } from "react-router-dom";

export default function BlogSwiper() {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-[95vw] sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-6 sm:py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper mt-3"
      >
        {sortedBlogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[340px] sm:h-[330px] md:h-[340px] lg:h-[310px]">
              {/* Blog Image */}
              <div className="flex-shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-24 sm:h-36 md:h-40 lg:h-32 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1 justify-between">
                {/* Title and Date */}
                <div>
                  <h3
                    className="text-base sm:text-lg md:text-xl font-bold mb-2 text-[#3c405b]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-sm mb-2 sm:mb-3">
                    {blog.date}
                  </p>
                </div>

                {/* Reactions and Button */}
                <div>
                  <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm md:text-sm">
                    <span>❤️ {blog.reactions}</span>
                    <span>💬 {blog.comments}</span>
                  </div>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 font-medium text-sm sm:text-base mt-2 sm:mt-3 inline-block whitespace-nowrap hover:underline"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
