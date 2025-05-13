import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import profileImage from "../assets/img/photo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  const handleLinkClick = () => {
    setNav(false);
  };

  const navItems = [
    { name: "Info", id: "hero" },
    { name: "Technologies", id: "techstack" },
    { name: "Projects", id: "projects" },
    { name: "Activities", id: "activities" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white border-b border-gray-300 fixed top-0 z-50">
      {/* Profile Image */}
      <div className="flex items-center gap-2">
        <div className="bg-[#ffdf00] rounded-full w-14 h-14 overflow-hidden p-1 hover:scale-105 transition-transform duration-300">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">
          Bhakti Bhande
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-lg items-center">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
              className="hover:text-[#ffdf00] transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#ffdf00] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <AiOutlineClose className="text-3xl text-[#ffdf00]" />
        ) : (
          <AiOutlineMenu className="text-3xl text-[#ffdf00]" />
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-3/4 md:w-1/2 h-full bg-white shadow-lg border-r border-gray-300 transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center p-4 bg-[#ffdf00] shadow-md border-b border-gray-300">
          <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center p-2 hover:scale-105 transition-transform duration-300">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-[90%] h-[90%] object-cover"
            />
          </div>
        </div>
        <ul className="flex flex-col items-center mt-8 space-y-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-xl font-semibold hover:text-[#ffdf00] transition-colors duration-300"
            >
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
