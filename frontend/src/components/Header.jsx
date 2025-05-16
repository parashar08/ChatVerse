import { Link } from "react-router-dom";
import { IoIosChatbubbles } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md h-14 md:h-16 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <IoIosChatbubbles size={26} className="text-blue-600" />
        <Link to="/">
          <h1 className="text-lg md:text-2xl font-semibold text-gray-800 tracking-wide">
            ChatVerse
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Link to="/login">
          <button className="text-sm md:text-base text-blue-600 font-medium hover:underline transition cursor-pointer">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md transition font-medium cursor-pointer">
            Sign Up
          </button>
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropDownOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <BsThreeDotsVertical size={20} className="text-gray-700" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm text-red-500 hover:bg-red-100 transition"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
