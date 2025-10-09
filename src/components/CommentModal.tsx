import React, { useState } from "react";
import { X, Send, CheckCircle, Loader2 } from "lucide-react"; // icons

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      const formData = new FormData();
      formData.append("access_key", "b9bf4eb1-37a2-458f-81bf-11255f5b2da6");
      formData.append("email", email);
      formData.append("message", comment);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("✅ Your comment has been submitted successfully!");
        setEmail("");
        setComment("");

        // Auto-hide after 3s
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setSuccessMessage("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("⚠️ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-[90vw] sm:max-w-lg md:max-w-md p-4 sm:p-6 relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X size={20} sm={{ size: 24 }} />
        </button>

        {/* Heading */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3c405b] dark:text-white mb-3 sm:mb-4">
          Share Your Comment
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-[#3c405b] focus:outline-none disabled:opacity-50"
          />

          {/* Comment */}
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={3} sm={{ rows: 4 }}
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-[#3c405b] focus:outline-none disabled:opacity-50"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#3c405b] text-white py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={16} sm={{ size: 18 }} /> Submitting...
              </>
            ) : (
              <>
                Submit <Send size={16} sm={{ size: 18 }} />
              </>
            )}
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="mt-3 sm:mt-4 flex items-center gap-2 text-green-600 text-xs sm:text-sm font-medium">
            <CheckCircle size={16} sm={{ size: 18 }} /> {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentModal;