import React from "react";
import {FaYoutube,FaXTwitter,FaFacebookF,FaInstagram,FaTiktok} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-sm px-6 py-6">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-4 text-lg mb-2 md:mb-1">
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaTiktok className="hover:text-gray-300 cursor-pointer" />
          </div>
          <p className="text-xs text-white text-center md:text-left">© 2025 WarnerMedia Direct, LLC. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 font-medium">
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Info</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
