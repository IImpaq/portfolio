"use client";

import { contacts } from "@/lib/contacts";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMapPin, FiUser } from "react-icons/fi";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

    setFormStatus("sent");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <div className="mt-[64px]">
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 cursor-default"
              >
                <span className="inline-block px-4 py-2 rounded-lg text-sm font-mono text-[var(--color-yellow)] border border-[var(--color-yellow)] border-opacity-40">
                  ✨ Let&apos;s create something amazing
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono text-[var(--color-fg)]">
                Get in Touch
              </h1>
              <p className="text-lg text-[var(--color-gray)]">
                Have a project in mind? I&apos;d love to hear about it.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1"
              >
                <div className="glass-card p-8 rounded-xl border border-[var(--color-fg)] border-opacity-10">
                  <h2 className="text-2xl font-bold mb-6 font-mono text-[var(--color-fg)]">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--color-gray)] mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full p-3 rounded-lg bg-[var(--color-fg)] bg-opacity-5 border border-[var(--color-fg)] border-opacity-10 focus:border-[var(--color-yellow)] focus:outline-none text-[var(--color-fg)] placeholder-[var(--color-gray)]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--color-gray)] mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full p-3 rounded-lg bg-[var(--color-fg)] bg-opacity-5 border border-[var(--color-fg)] border-opacity-10 focus:border-[var(--color-yellow)] focus:outline-none text-[var(--color-fg)] placeholder-[var(--color-gray)]"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--color-gray)] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full p-3 rounded-lg bg-[var(--color-fg)] bg-opacity-5 border border-[var(--color-fg)] border-opacity-10 focus:border-[var(--color-yellow)] focus:outline-none text-[var(--color-fg)] placeholder-[var(--color-gray)]"
                        placeholder="Sending message via the form is not support yet, please contact me via email or social media."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-lg bg-[var(--color-yellow)] bg-opacity-10 text-[var(--color-fg)] font-mono hover:bg-opacity-20 transition-all duration-300"
                      disabled
                    >
                      {formStatus === "sending"
                        ? "Sending..."
                        : formStatus === "sent"
                          ? "Message Sent!"
                          : "Send Message"}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="md:w-80 space-y-6" // Added space-y-6 for gap between cards
              >
                {/* Social Links Card */}
                <div className="glass-card p-8 rounded-xl border border-[var(--color-fg)] border-opacity-10">
                  <h2 className="text-2xl font-bold mb-6 font-mono text-[var(--color-fg)]">
                    Connect With Me
                  </h2>
                  <div className="space-y-4">
                    {contacts.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-lg hover:bg-[var(--color-yellow)] hover:bg-opacity-5 transition-all duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        <link.icon
                          size={20}
                          className="text-[var(--color-yellow)] group-hover:text-[var(--color-fg)] transition-colors duration-300"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[var(--color-fg)]">
                            {link.label}
                          </div>
                          <div className="text-sm text-[var(--color-gray)]">
                            {link.username}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Legal Information Card */}
                <div className="glass-card p-8 rounded-xl border border-[var(--color-fg)] border-opacity-10">
                  <h2 className="text-2xl font-bold mb-6 font-mono text-[var(--color-fg)]">
                    Legal Information
                  </h2>
                  <div className="space-y-4">
                    {/* Author/Media Owner */}
                    <div className="flex items-center p-4 rounded-lg">
                      <FiUser
                        size={20}
                        className="text-[var(--color-yellow)]"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[var(--color-fg)]">
                          Author / Media Owner
                        </div>
                        <div className="text-sm text-[var(--color-gray)]">
                          Marcus Gugacs
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center p-4 rounded-lg">
                      <FiMapPin
                        size={20}
                        className="text-[var(--color-yellow)]"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[var(--color-fg)]">
                          Location
                        </div>
                        <div className="text-sm text-[var(--color-gray)]">
                          2113 Karnabrunn, Austria
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
