"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "@/app/ui/navlink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">G</Link>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/" text="Home" />
          <NavLink href="/projects" text="Projects" />
          <NavLink href="/about" text="About" />
          <NavLink href="/contact" text="Contact" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="text-2xl"/> : <FiMenu className="text-2xl"/>}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}} className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink href="/" onClick={() => setIsOpen(false)} text="Home" />
            <NavLink href="/projects" onClick={() => setIsOpen(false)} text="Projects" />
            <NavLink href="/about" onClick={() => setIsOpen(false)} text="About" />
            <NavLink href="/contact" onClick={() => setIsOpen(false)} text="Contact" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
