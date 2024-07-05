"use client";

import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiActivity} from 'react-icons/fi';
import Navbar from '@/app/ui/common/navbar';
import Footer from "@/app/ui/common/footer";
import ContactItem from "@/app/ui/contact/contact-item";
import DynamicGrid from "@/app/ui/common/dynamic-grid";

const Contact: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    alert("The contact form does not work yet, please send an email to me directly.");
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Contact - Your Name</title>
        <meta name="description" content="Get in touch with [Your Name] for collaboration or inquiries." />
      </Head>

      <Navbar />

      <main className="relative pt-16">
        <DynamicGrid cellSize={50} lineColor="rgba(255,255,255,0.1)" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center"
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}>
            Get in Touch
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.2}}>
              <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-gray-400">Name</label>
                  <input type="text"
                         id="name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         required
                         className="w-full bg-black border border-gray-800 rounded px-3 py-2 focus:outline-none focus:border-white transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-gray-400">Email</label>
                  <input type="email"
                         id="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                         className="w-full bg-black border border-gray-800 rounded px-3 py-2 focus:outline-none focus:border-white transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-gray-400">Message</label>
                  <textarea id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            className="w-full bg-black border border-gray-800 rounded px-3 py-2 focus:outline-none focus:border-white transition duration-300"
                  ></textarea>
                </div>
                <motion.button
                    type="button"
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center"
                    onClick={handleSubmit}
                >
                  Send Message <FiSend className="ml-2"/>
                </motion.button>
              </form>
            </motion.div>

            <motion.div
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.4}}
                className="space-y-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              <div className="space-y-4">
                <ContactItem
                    icon={<FiMail/>}
                    title="Email"
                    value="iimpaq@proton.me"
                    link="mailto:iimpaq@proton.me"
                />
                <ContactItem
                    icon={<FiGithub/>}
                    title="GitHub"
                    value="/IImpaq"
                    link="https://github.com/IImpaq"
                />
                <ContactItem
                    icon={<FiLinkedin/>}
                    title="LinkedIn"
                    value="/placeholder"
                    link="https://www.linkedin.com/in/placeholder"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-6">Details</h2>
              <div className="space-y-4">
                <ContactItem
                    icon={<FiActivity/>}
                    title="Author / Media Owner"
                    value="Marcus Gugacs"
                    link="https://www.gugacs.me"
                />
                <ContactItem
                    icon={<FiMapPin/>}
                    title="Location"
                    value="2113 Karnabrunn, Austria"
                    link="https://www.gugacs.me"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
