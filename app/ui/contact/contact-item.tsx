import {motion} from "framer-motion";
import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, link }) => (
  <motion.a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300 group"
            whileHover={{ x: 5 }}>
    <div className="text-2xl border border-gray-800 p-3 rounded-full group-hover:border-white transition duration-300">
      {icon}
    </div>

    <div>
      <p className="font-semibold text-white">{title}</p>
      <p>{value}</p>
    </div>
  </motion.a>
);

export default ContactItem;
