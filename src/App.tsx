import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/route";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FullScreenBlobs from "./components/gradientBlob";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

const App: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ WhatsApp Info
  const whatsappNumber = "+94771234567"; // Change to your number
  const whatsappMessage = "Hello! I would like to inquire about your services.";

  return (
    <BrowserRouter>
      <div className="relative min-h-screen transition-colors duration-300">
        <FullScreenBlobs />
        <Header />

        {/* Scrollable Content */}
        <main className="relative z-10 pb-80 lg:pb-72">
          <RoutesComponent />
        </main>

        {/* Footer fixed in the back */}
        <div className="fixed bottom-0 left-0 w-full z-0">
          <Footer />
        </div>

        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-16 right-6 z-50 p-3 bg-[#3c405b] text-white rounded-full shadow-lg hover:bg-[#2a2d44] transition-all"
          >
            <FaArrowUp />
          </button>
        )}

        {/* WhatsApp Hotline Button */}
        <a
          href={`https://wa.me/94759929718?text=${encodeURIComponent(
            "Hello! I want to contact you."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-1/2 left-0 transform -translate-x-1/2 animate-bounce z-50 bg-green-500 p-4 rounded-r-full shadow-lg flex items-center gap-2 text-white hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={29} />
          <span className="hidden md:inline-block font-semibold">
            WhatsApp
          </span>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
