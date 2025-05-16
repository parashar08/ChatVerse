import { Link } from "react-router-dom";
import { IoIosChatbubbles } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
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
    <header className="max-w-full h-[3.3rem] md:h-[3.5rem] bg-gray-200 flex items-center justify-between gap-2 px-2 md:px-8">
      {/* Logo and title */}
      <div className="flex items-center gap-2 md:gap-4">
        <IoIosChatbubbles size={22} />
        <Link to="/">
          <h1 className="text-xl font-bold cursor-pointer md:text-[1.4rem]">
            ChatVerse
          </h1>
        </Link>
      </div>

      {/* Right side buttons and dropdown */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/login">
          <button className="text-blue-600 font-medium hover:underline cursor-pointer transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-3 py-1 rounded-lg font-medium cursor-pointer">
            Signup
          </button>
        </Link>

        {/* Dropdown container (with ref wrapping both button and menu) */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropDownOpen((prev) => !prev)}
            className="cursor-pointer transition"
          >
            <BsThreeDotsVertical size={20} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white text-black shadow-md z-50 rounded-md overflow-hidden border border-gray-200">
              <Link
                to="/setting"
                className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
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
