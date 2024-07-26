import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import machine from "../assets/img/machine.webp";
import datascience from "../assets/img/data.png";

const TechStack = () => {
  return (
    <div className="w-full px-4 mt-10">
      <h1 className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4">What I do</h1>
      <div className="md:grid md:grid-cols-3 gap-8 px-3 flex flex-col">
        {/* web developer */}
        <div className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[75%] grid grid-cols-4 gap-4 p-4">
            <FaHtml5 className="text-red-600 text-3xl" />
            <FaCss3Alt className="text-blue-600 text-3xl" />
            <IoLogoJavascript className="text-yellow-500 text-3xl" />
            <FaReact className="text-cyan-400 text-3xl" />
            <FaNodeJs className="text-green-600 text-3xl" />
            <SiExpress className="text-gray-600 text-3xl" />
            <DiMongodb className="text-green-700 text-3xl" />
            <FaPhp className="text-blue-700 text-3xl" />
          </div>
          <div className="bg-[#ffdf00] w-full h-[25%] text-xl font-medium flex justify-center items-center">
            Web Development
          </div>
        </div>
        {/* machine learning */}
        <div className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[75%] relative">
            <img src={machine} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-[#ffdf00] w-full h-[25%] text-xl font-medium flex justify-center items-center">
            Machine Learning
          </div>
        </div>
        {/* Database system */}
        <div className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[75%] flex justify-center items-center gap-10">
            <FaDatabase className="text-black text-3xl" />
            <SiMysql className="text-blue-700 text-3xl" />
            <DiMongodb className="text-green-700 text-3xl" />
          </div>
          <div className="bg-[#ffdf00] w-full h-[25%] text-xl font-medium flex justify-center items-center">
            Database Systems
          </div>
        </div>
        {/* Data Analysis */}
        <div className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[75%] relative flex justify-center items-center overflow-hidden">
            <img src={datascience} alt="" className="w-[50%]" />
          </div>
          <div className="bg-[#ffdf00] w-full h-[25%] text-xl font-medium flex justify-center items-center">
            Data Analysis
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
