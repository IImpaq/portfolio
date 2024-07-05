import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({href, text, onClick}) => (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors duration-200" onClick={onClick}>
      {text}
    </Link>
);

export default NavLink;