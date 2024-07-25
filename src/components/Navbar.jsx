import profileImage from "../assets/img/m.png";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex items-center justify-between h-30 px-6 py-2 shadow-sm shadow-gray-300">
      <div className="bg-[#ffdf00] rounded-full w-24 h-24 flex justify-center items-center p-2 hover:scale-105 duration-100">
        <img src={profileImage} alt="Profile" className="h-[85%]" />
      </div>
      <ul className="hidden md:flex gap-10 justify-center text-xl items-center mt-[-10px]">
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100">Home</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100">Techstack</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100">Projects</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100">Activities</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose className="mt-2 ml-3 text-3xl font-extrabold" /> : <AiOutlineMenu className="mt-2 ml-3 text-3xl font-extrabold" />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[40%] h-[450px]  text-xl bg-white ease-in-out duration-500 pl-3 pt-4 flex flex-col justify-start border-r border-b  shadow-md shadow-gray-200 z-50' : 'fixed left-[-100%]'}>
      <div className="bg-[#ffdf00] rounded-full w-28 h-28 flex justify-center items-center p-2 hover:scale-105 duration-100">
        <img src={profileImage} alt="Profile" className="h-[90%]" />
      </div>
        <ul className= "p-4">
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100 mb-6">Home</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100 mb-6">Techstack</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100 mb-6">Projects</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100 mb-6">Activities</li>
        <li className="hover:text-[#ffdf00] hover:scale-105 duration-100 mb-6">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
