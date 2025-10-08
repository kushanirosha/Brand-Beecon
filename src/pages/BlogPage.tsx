import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs as initialBlogs, Blog } from "../utils/Blogdata";
import SubscribeSection from "../components/subscribe";

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

  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  const newestBlog = blogs.reduce((latest, blog) =>
    blog.id > latest.id ? blog : latest
  );

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
      formData.append("subject", `New Comment on Blog ID: ${selectedBlog.id}`);

      // Extra field for blogId
      formData.append("blog_id", String(selectedBlog.id));

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

  return (
    <div className="pt-28 bg-gray-50 min-h-screen rounded-b-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Blog Content */}
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
                {/* Blog ID: {selectedBlog.id} */}
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

            <div className="text-gray-700">{selectedBlog.description}</div>

            {/* Comments */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-[#3c405b] mb-4">
                Comments
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-gray-700">{comment.text}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {comment.email} • {comment.timestamp}
                    </p>
                  </div>
                ))}
              </div>

              {/* Form */}
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
                <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-[#3c405b] mb-6">
              All Blogs
            </h2>
            <div className="overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className={`block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow mb-6 ${
                    selectedBlog.id === blog.id ? "ring-2 ring-[#3c405b]" : ""
                  }`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#3c405b]">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
                    <div className="flex justify-between text-sm text-gray-600 mt-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleLike(blog.id);
                        }}
                        className="flex items-center gap-1 text-[#3c405b] hover:text-[#2E3453] transition"
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

      {/* Subscribe Section */}
      <div className="bg-gray-100 mt-10 rounded-b-[50px]">
        <SubscribeSection />
      </div>
    </div>
  );
};

export default BlogPage;
