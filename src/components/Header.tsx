"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full h-16 z-[9999]
        text-white flex items-center px-6
        transition-all duration-300 ease-in-out
        ${scrolled ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      <div className="w-full px-4 py-4 flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-full flex items-center justify-between md:w-auto md:flex-1">
          <img src="/img/maxLogo.png" alt="Max Logo" className="h-8 md:h-10" />
          <div className="flex space-x-4 text-xl md:hidden">
            <FaSearch className="cursor-pointer hover:text-gray-300" />
            <FaUserCircle className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
        <nav className="w-full md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center mt-4 md:mt-0 space-x-6 text-lg md:text-xl font-semibold tracking-wide overflow-x-auto">
          <a href="#" className="hover:underline whitespace-nowrap">
            Home
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            Series
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            Movies
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            HBO
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            Kids & Family
          </a>
        </nav>
        <div className="hidden md:flex items-center space-x-4 text-xl">
          <FaSearch className="cursor-pointer hover:text-gray-300" />
          <FaUserCircle className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;
