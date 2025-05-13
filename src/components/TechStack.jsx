import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiPython,
  SiR,
  SiMysql,
  SiTensorflow,
  SiPhp,
  SiFirebase,
  SiLinux,
  SiJavascript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const TechStack = () => {
  return (
    <div className="w-full px-4 mt-10" id="techstack">
      <h1 className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4">
        👀 My Tech Stack
      </h1>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 flex flex-col">
        {/* Web Development */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md h-60 rounded-md overflow-hidden border-t border-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] grid grid-cols-4 gap-4 p-4 pl-8 text-white">
            <FaHtml5 className="text-3xl shadow-sm" />
            <FaCss3Alt className="text-3xl shadow-sm" />
            <SiJavascript className="text-3xl shadow-sm" />
            <FaReact className="text-3xl shadow-sm" />
            <SiPhp className="text-3xl shadow-sm" />
          </div>
          <div className="bg-white text-black h-[20%] text-xl font-medium flex justify-center items-center">
            Web Development
          </div>
        </div>

        {/* AI/ML */}
        <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 shadow-md h-60 rounded-md overflow-hidden border-t border-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] grid grid-cols-4 gap-4 p-4 pl-8 text-white">
            <SiPython className="text-3xl shadow-sm" />
            <SiTensorflow className="text-3xl shadow-sm" />
            <GiArtificialIntelligence className="text-3xl shadow-sm" />
            <SiR className="text-3xl shadow-sm" />
          </div>
          <div className="bg-white text-black h-[20%] text-xl font-medium flex justify-center items-center">
            AI / ML
          </div>
        </div>

        {/* Database Systems */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-md h-60 rounded-md overflow-hidden border-t border-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] flex justify-center items-center gap-10 text-white">
            <FaDatabase className="text-3xl shadow-sm" />
            <SiMysql className="text-3xl shadow-sm" />
            <SiFirebase className="text-3xl shadow-sm" />
          </div>
          <div className="bg-white text-black h-[20%] text-xl font-medium flex justify-center items-center">
            Database Systems
          </div>
        </div>

        {/* Core CS & DSA */}
        <div className="bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400 shadow-md h-60 rounded-md overflow-hidden border-t border-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] flex justify-center items-center gap-8 text-white">
            <TbBrandCpp className="text-3xl shadow-sm" />
            <FaJava className="text-3xl shadow-sm" />
            <SiLeetcode className="text-3xl shadow-sm" />
          </div>
          <div className="bg-white text-black h-[20%] text-xl font-medium flex justify-center items-center">
            Data Structures & Algorithms
          </div>
        </div>

        {/* Tools */}
        <div className="bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 shadow-md h-60 rounded-md overflow-hidden border-t border-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] flex justify-center items-center gap-8 text-white">
            <SiLinux className="text-3xl shadow-sm" />
            <FaGitAlt className="text-3xl shadow-sm" />
          </div>
          <div className="bg-white text-black h-[20%] text-xl font-medium flex justify-center items-center">
            Tools & Platforms
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
