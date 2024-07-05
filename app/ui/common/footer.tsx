import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-screen-xl py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:w-1/4">
            <Link href="/" className="text-2xl font-bold">G</Link>
          </div>
          <nav className="mb-4 md:mb-0 md:w-2/4 flex justify-center">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:w-1/4 flex justify-end">
            <div className="flex space-x-4">
              <a href="https://github.com/IImpaq" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiGithub size={20}/>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiLinkedin size={20}/>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiTwitter size={20}/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {currentYear} Marcus Gugacs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
