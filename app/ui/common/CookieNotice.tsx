"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 shadow-lg z-40"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <p className="text-sm mr-4">
          This website uses essential cookies to provide a great user experience.
          If you continue to use this site, you agree to the use of cookies.
        </p>
        <div className="flex items-center">
          <button
            onClick={acceptCookies}
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            aria-label="accept cookies"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white hover:text-gray-300 transition-colors"
            aria-label="dismiss cookies"
          >
            <FiX size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieNotice;
