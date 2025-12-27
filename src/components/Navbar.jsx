import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import profileImage from "../assets/img/photo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    { name: "Info", id: "hero" },
    { name: "Technologies", id: "techstack" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "activities" },
  ];

  return (
    <div className="fixed top-0 w-full bg-[#0b1120]/90 backdrop-blur border-b border-gray-700 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img
            src={profileImage}
            alt="Bhakti Bhande"
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
          <h1 className="hidden md:block font-semibold text-lg">
            Bhakti Bhande
          </h1>
        </div>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                offset={-80}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {nav && (
        <div className="md:hidden bg-[#020617] border-t border-gray-700">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  offset={-80}
                  onClick={() => setNav(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
