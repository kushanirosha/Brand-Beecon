import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs as initialBlogs, Blog } from "../utils/Blogdata";
import SubscribeSection from "../components/subscribe";
import { motion } from "framer-motion";

interface Comment {
  id: number;
  text: string;
  timestamp: string;
  email: string;
}

const BlogPage: React.FC = () => {
  const { blogId } = useParams<{ blogId?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Sort blogs from newest → oldest
  const sortedBlogs = [...initialBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [blogs, setBlogs] = useState<Blog[]>(sortedBlogs);
  const newestBlog = sortedBlogs[0];

  useEffect(() => {
    if (!blogId && newestBlog) {
      navigate(`/blog/${newestBlog.id}`, { replace: true });
    }
  }, [blogId, newestBlog, navigate]);

  const selectedBlog =
    blogs.find((b) => b.id === Number(blogId)) || newestBlog;

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !newEmail.trim()) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      const formData = new FormData();
      formData.append("access_key", "b9bf4eb1-37a2-458f-81bf-11255f5b2da6");
      formData.append("email", newEmail);
      formData.append("message", newComment);
      formData.append("subject", `New Comment on Blog: ${selectedBlog.title}`);
      formData.append("blog_title", selectedBlog.title);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        const timestamp = new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        });

        setComments([
          ...comments,
          { id: Date.now(), text: newComment, email: newEmail, timestamp },
        ]);
        setNewComment("");
        setNewEmail("");
        setSuccessMessage("✅ Comment submitted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setSuccessMessage("❌ Failed to send comment. Try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("⚠️ Something went wrong.");
    }

    setLoading(false);
  };

  const handleLike = (blogId: number) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === blogId ? { ...blog, reactions: blog.reactions + 1 } : blog
    );
    setBlogs(updatedBlogs);
  };

  // ✨ Fade-up animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="pt-28 bg-gray-50 min-h-screen rounded-b-[50px]"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 📰 Main Blog Content */}
          <div className="lg:col-span-3">
            <div className="mb-12">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h1 className="text-4xl font-bold text-[#3c405b] mt-6 text-center">
                {selectedBlog.title}
              </h1>
              <p className="text-center text-gray-500 mt-2 flex items-center justify-center gap-4">
                {selectedBlog.date}
                <button
                  onClick={() => handleLike(selectedBlog.id)}
                  className="flex items-center gap-1 text-[#3c405b] hover:text-[#2E3453] transition"
                >
                  👍 {selectedBlog.reactions}
                </button>
                • 💬 {selectedBlog.comments}
              </p>
            </div>

            <div className="text-gray-700 leading-relaxed">
              {selectedBlog.description}
            </div>

            {/* 💬 Comments Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-[#3c405b] mb-4">
                Comments
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <p className="text-gray-700">{comment.text}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {comment.email} • {comment.timestamp}
                    </p>
                  </div>
                ))}
              </div>

              {/* 📝 Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mt-6 space-y-4">
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c405b]"
                  required
                />
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c405b]"
                  rows={3}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 px-4 py-2 bg-[#3c405b] text-white rounded-full hover:bg-[#2E3453] transition-colors"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>

              {successMessage && (
                <p className="mt-4 text-green-600 font-medium">
                  {successMessage}
                </p>
              )}
            </div>
          </div>

          {/* 🧭 Sidebar */}
          <div className="lg:col-span-1 bg-gradient-to-b from-[#f8f9fb] to-[#e9ecf4] shadow-xl p-5 rounded-2xl border border-gray-200">
            <h2 className="text-3xl font-bold text-[#3c405b] mb-2 text-center">
              📰 Latest Blogs
            </h2>
            <p className="text-center text-[#5a5e78] text-sm mb-5 italic">
              "Stay inspired and keep learning."
            </p>
            <div className="bg-[#3c405b] h-1 w-1/2 mx-auto mb-5 rounded-full"></div>

            <div className="p-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3c405b]/40 scrollbar-track-gray-100">
              {blogs.map((blog, index) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className={`block rounded-xl overflow-hidden transition-all duration-300 mb-5 ${
                    selectedBlog.id === blog.id
                      ? "ring-2 ring-[#3c405b] bg-[#f0f2f8]"
                      : index % 2 === 0
                      ? "bg-white hover:bg-[#f9fafc]"
                      : "bg-[#f3f4f8] hover:bg-[#eef0f6]"
                  } shadow-md hover:shadow-lg`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#2E3453] leading-tight line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-[#6b718a] mt-1">{blog.date}</p>
                    <div className="flex justify-between text-sm text-[#3c405b] mt-3 font-medium">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleLike(blog.id);
                        }}
                        className="flex items-center gap-1 hover:text-[#2E3453]"
                      >
                        👍 {blog.reactions}
                      </button>
                      <span>💬 {blog.comments}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 📩 Subscribe Section */}
      <div className="bg-gray-100 mt-10 rounded-b-[50px]">
        <SubscribeSection />
      </div>
    </motion.div>
  );
};

export default BlogPage;
