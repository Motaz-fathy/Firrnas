import React from "react";
import { Link, useLocation } from "react-router-dom";
import  {LogoDeskTop , LogoMobile}  from '../../uitilty/images/index'


const Navbar = () => {
  // Navigation links array
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Discover", path: "/discover" },
    { name: "Community", path: "/community" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  // Get the current location
  const location = useLocation();

  return (
    <nav className="w-5/6 px-6 py-4 flex justify-between items-center ">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={LogoDeskTop} // Replace with your logo path
          alt="Firrnas Logo"
          className="h-6"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden h-full lg:flex space-x-6 rounded-full border-[1px] border-indigo-700/20 px-4 py-[14px] text-[0.7rem] bg-transparent">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`font-medium hover:text-purple-500 ${
              location.pathname === link.path
                ? "text-white"
                : "text-gray-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Button Section */}
      <div>
        <Link
          to="/order"
          className="bg-transparent border-[1px] border-indigo-700/20 text-gray-100 px-4 py-[14px] text-[0.7rem] rounded-full text-sm hover:bg-purple-500 hover:text-white transition duration-300"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
