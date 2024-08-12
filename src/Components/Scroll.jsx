// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Menampilkan tombol saat pengguna menggulir ke bawah
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="fixed bottom-10 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-slate-200 text-black px-2.5 rounded-full shadow-lg hover:bg-slate-300 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
