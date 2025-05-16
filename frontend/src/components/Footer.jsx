import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            About ChatVerse
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            ChatVerse empowers you to connect anytime, anywhere — one-to-one
            chats, groups, media sharing, and video calls with ease and
            security.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <Link to="/contact" className="hover:text-blue-500 transition">
                +1 234 567 890
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <Link to="/contact" className="hover:text-blue-500 transition">
                support@chatverse.com
              </Link>
            </li>
            <li>📍 123 Chat St, Messaging City</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Help & Support
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <Link to="/faq" className="hover:text-blue-500 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-blue-500 transition">
                Support Center
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-500 transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-500 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-6 text-gray-400 text-2xl">
            <a
              href="https://facebook.com/chatverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/chatverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/chatverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} ChatVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
