import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { blogs } from "../utils/Blogdata";
import { Link } from "react-router-dom"; // ✅ Import Link if using react-router

export default function BlogSwiper() {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sortedBlogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[310px]">
              <div className="flex-shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div>
                  <h3
                    className="text-xl font-bold mb-2 text-[#3c405b]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{blog.date}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>❤️ {blog.reactions}</span>
                    <span>💬 {blog.comments}</span>
                  </div>

                  {/* ✅ Navigate to blog/:id */}
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 font-medium mt-3 inline-block whitespace-nowrap hover:underline"
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
