import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot, SiSpring ,SiTensorflow} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMysql,SiPython, SiFlask,SiR,SiGit, SiGithub } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import machine from "../assets/img/machine.webp";
import datascience from "../assets/img/data.png";
import { GiArtificialIntelligence } from 'react-icons/gi';

const TechStack = () => {
  return (
    <div className="w-full px-4 mt-10" id="techstack">
      <h1 className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4">
        👀 What I do
      </h1>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 flex flex-col">
        {/* Web Development */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] grid grid-cols-4 gap-4 p-4 pl-8 text-white">
            <FaHtml5 className="text-3xl shadow-sm shadow-gray-400" />
            <FaCss3Alt className="text-3xl shadow-sm shadow-gray-400" />
            <IoLogoJavascript className="text-3xl shadow-sm shadow-gray-400" />
            <FaReact className="text-3xl shadow-sm shadow-gray-400" />
            <FaNodeJs className="text-3xl shadow-sm shadow-gray-400" />
            <SiExpress className="text-3xl shadow-sm shadow-gray-400" />
            <DiMongodb className="text-3xl shadow-sm shadow-gray-400" />
            <SiSpring className="text-3xl shadow-sm shadow-gray-400" />
            <SiSpringboot className="text-3xl shadow-sm shadow-gray-400" />
            <SiPython className="text-3xl shadow-sm shadow-gray-400" />
            <SiFlask className="text-3xl shadow-sm shadow-gray-400" />
            <SiGit className="text-3xl shadow-sm shadow-gray-400" />
          </div>
          <div className="bg-white text-black w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Web Development
          </div>
        </div>
        {/* Machine Learning */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
        <div className="w-full h-[80%] grid grid-cols-4 gap-4 p-4 pl-8 text-white">
        <SiTensorflow className="text-blue-400 text-3xl shadow-sm shadow-gray-400" />
          <GiArtificialIntelligence className="text-blue-400 text-3xl shadow-sm shadow-gray-400" />
          <SiR className="text-blue-400 text-3xl shadow-sm shadow-gray-400" />
          <SiPython className="text-3xl shadow-sm shadow-gray-400" />



          </div>
          <div className="bg-white text-black w-full h-[20%] text-xl font-medium flex justify-center items-center">
            AI/ML
          </div>
        </div>
        {/* Database Systems */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] flex justify-center items-center gap-10 text-white">
            <FaDatabase className="text-3xl shadow-sm shadow-gray-400" />
            <SiMysql className="text-3xl shadow-sm shadow-gray-400" />
            <DiMongodb className="text-3xl shadow-sm shadow-gray-400" />
          </div>
          <div className="bg-white text-black w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Database Systems
          </div>
        </div>
        {/* Data Structures and Algorithms */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[80%] flex justify-center items-center gap-10 text-white">
            <TbBrandCpp className="text-3xl shadow-sm shadow-gray-400" />
            <FaJava className="text-3xl shadow-sm shadow-gray-400" />
            <SiLeetcode className="text-3xl shadow-sm shadow-gray-400" />
          </div>
          <div className="bg-white text-black w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Data Structures And Algorithms
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default TechStack;
