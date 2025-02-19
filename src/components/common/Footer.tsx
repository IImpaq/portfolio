"use client";

import { links } from "@/lib/links";
import { socials } from "@/lib/socials";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiHeart, FiCoffee } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div>
              <h3 className="font-mono text-[var(--color-yellow)] mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-mono text-[var(--color-gray)] hover:text-[var(--color-yellow)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-mono text-[var(--color-yellow)] mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:iimpaq@proton.me"
                    className="font-mono text-[var(--color-gray)] hover:text-[var(--color-yellow)] transition-colors"
                  >
                    iimpaq@proton.me
                  </a>
                </li>
                <li className="font-mono text-[var(--color-gray)]">
                  Based in Austria
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-mono text-[var(--color-yellow)] mb-4">
                Social
              </h3>
              <ul className="space-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[var(--color-gray)] hover:text-[var(--color-yellow)] transition-colors"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-8 border-t border-[var(--color-gray)] border-opacity-20"
          >
            <p className="text-center font-mono text-[var(--color-gray)] text-sm flex items-center justify-center gap-2">
              <span>© {currentYear} Built with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FiHeart className="text-[var(--color-yellow)]" />
              </motion.span>
              <span>and</span>
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FiCoffee className="text-[var(--color-orange)]" />
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
