import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/img/photo1.png"; 
import { Link } from "react-scroll";

const Hero = () => {
  const svgBase64 =
    "PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMjQ4LCAxODQuNTc1LCA1NSwgMSkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIGlkPSJzdG9wMiIgc3RvcC1jb2xvcj0icmdiYSgyNTUsIDIxMSwgMCwgMC43KSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0idXJsKCNzdy1ncmFkaWVudCkiIGQ9Ik0yMy43LC0zNi44QzMwLC0zMi45LDMzLjksLTI1LjEsMzYuNywtMTcuM0MzOS41LC05LjUsNDEuMSwtMS42LDM4LDRDMzQuOSw5LjYsMjcsMTMuMSwyMS4yLDE2LjZDMTUuNCwyMC4xLDExLjcsMjMuNyw3LjEsMjUuNkMyLjUsMjcuNiwtMi45LDI4LC03LjcsMjYuNEMtMTIuNCwyNC45LC0xNi41LDIxLjQsLTIyLjIsMTcuN0MtMjcuOCwxMy45LC0zNSwxMCwtMzgsNC4xQy00MSwtMS44LC0zOS44LC05LjcsLTM2LjcsLTE2LjlDLTMzLjYsLTI0LjEsLTI4LjcsLTMwLjUsLTIyLjIsLTM0LjRDLTE1LjgsLTM4LjMsLTcuOSwtMzkuNywwLjQsLTQwLjNDOC43LC00MSwxNy40LC00MC44LDIzLjcsLTM2LjhaIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIHN0eWxlPSJ0cmFuc2l0aW9uOiAwLjNzOyIgc3Ryb2tlLXdpZHRoPSIwIj48L3BhdGg+CiAgICAgICAgICAgICAgPC9zdmc+";

  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.style.backgroundImage = `url(data:image/svg+xml;base64,${svgBase64})`;
    }
  }, [svgBase64]);

  return (
    <div
      className="w-full flex flex-col md:flex-row items-center md:justify-between"
      id="hero"
    >
      {/* Left part */}
      <div className="md:w-[50%] flex justify-center items-center">
        <motion.div
          className="relative md:w-[600px] md:h-[600px] w-[400px] h-[400px] bg-no-repeat bg-center bg-cover flex justify-center items-center rounded-full border-4 border-gray-300 shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          ref={svgRef}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Right part */}
      <div className="w-full md:w-[50%] pl-4 ">
        <motion.p
          className="font-medium pb-2 text md:text-3xl sm:text-2xl text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello everyone 👩🏻‍💻✨
        </motion.p>
        <motion.h1
          className="md:text-5xl sm:text-4xl text-3xl font-semibold pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm{" "}
          <span className="text-[#ffdf00] font-bold">Bhakti Bhande</span>
        </motion.h1>
        <div className="flex justify-start">
          <motion.p
            className="md:text-5xl sm:text-3xl text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            Software Developer
          </motion.p>
        </div>
        <motion.p
          className="md:text-2xl text-xl font-medium text-gray-500 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          B.Tech IT student at VIT Pune. Passionate about building intelligent,
          scalable software using Java, Python, cloud computing, and AI-driven
          automation.
        </motion.p>
        <Link
          activeClass="active"
          to="techstack"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="bg-[#ffdf00] w-[200px] rounded-md font-medium my-6 mx-auto px-4 py-3 text-black">
            Go to My Tech Stack
          </button>
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 justify-start">
          <a
            href="https://leetcode.com/u/bhaktibhande1/" // Add if available
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-black text-3xl shadow-md shadow-[#ffdf00]" />
          </a>
          <a
            href="https://github.com/bhaktisb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub className="text-black text-3xl shadow-md shadow-[#ffdf00]" />
          </a>
          <a
            href="www.linkedin.com/in/bhakti-bhande-b5b794293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black text-3xl shadow-md shadow-[#ffdf00]" />
          </a>
          <a
            href="https://twitter.com/" // Add if available
            target="_blank"
            rel="noopener noreferrer"
          >
{/*             <FaTwitter className="text-black text-3xl shadow-md shadow-[#ffdf00]" />
          </a>
          <a
            href="https://linkedin.com/in/bhakti-bhande/" // Add if relevant
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-black text-3xl shadow-md shadow-[#ffdf00]" /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
