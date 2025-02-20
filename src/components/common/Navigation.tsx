"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { links } from "@/lib/links";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at calc(100% - 52px) 52px)",
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 52px) 52px)",
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="fixed top-0 left-0 right-0 z-30 flex justify-center p-6">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl px-8 py-4"
          >
            <ul className="flex items-center gap-8">
              {links.map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className={`relative group flex items-center gap-2 font-mono text-sm
                      ${
                        pathname === item.href
                          ? "text-[var(--color-yellow)]"
                          : "text-[var(--color-gray)]"
                      }`}
                  >
                    <item.icon
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-6"
                    />
                    {item.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-px bg-[var(--color-yellow)]"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: pathname === item.href ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          {/* Current Page Indicator (Mobile Only) */}
          <div className="fixed top-6 left-0 right-0 flex justify-center z-40">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="px-4 py-2 rounded-full glass-card font-mono text-sm text-[var(--color-gray)]">
                {pathname === "/" ? "home" : pathname.slice(1)}
              </span>
            </motion.div>
          </div>

          <motion.button
            className="fixed top-6 left-6 z-50 p-3 rounded-full glass-card text-[var(--color-yellow)]"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 z-40 bg-[var(--color-bg)] bg-opacity-98 backdrop-blur-sm"
              >
                <div className="h-full flex items-center justify-center">
                  <nav className="relative z-50">
                    <ul className="space-y-8">
                      {links.map((item, i) => (
                        <motion.li
                          key={item.name}
                          custom={i}
                          variants={itemVariants}
                          className="text-center relative z-50"
                        >
                          <Link
                            href={item.href}
                            className={`group relative inline-flex items-center text-3xl font-mono
                              ${
                                pathname === item.href
                                  ? "text-[var(--color-yellow)]"
                                  : "text-[var(--color-gray)]"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="absolute -left-12 opacity-0 group-hover:opacity-100 transition-opacity">
                              <item.icon size={24} />
                            </span>
                            {item.name}
                            <motion.span
                              className="absolute -bottom-2 left-0 w-full h-px bg-[var(--color-yellow)]"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-[var(--color-yellow)] rounded-full opacity-5 blur-3xl z-0" />
                    <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[var(--color-orange)] rounded-full opacity-5 blur-3xl z-0" />
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default Navigation;
