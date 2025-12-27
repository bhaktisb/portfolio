import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImage from "../assets/img/bhakti.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-32"
    >
      <motion.img
        src={profileImage}
        alt="Bhakti Bhande"
        className="w-48 h-48 rounded-full border-4 border-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-blue-400">Bhakti Bhande</span>
        </h1>

        <h2 className="text-xl md:text-2xl mt-3 text-gray-300">
          Entry-Level Software Engineer
        </h2>

        <p className="mt-6 text-gray-400">
          B.Tech Information Technology student at Vishwakarma Institute of
          Technology, Pune (CGPA 8.85). Hands-on experience in full-stack
          development, test automation, and AI-driven systems.
        </p>

        {/* Social + Email */}
        <div className="flex gap-6 mt-6 justify-center md:justify-start text-2xl">
          <a
            href="https://github.com/bhaktisb"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/bhakti-bhande-b5b794293/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/bhaktibhande1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>

          {/* Email Contact */}
          <a
            href="mailto:bhaktibhande1@gmail.com"
            aria-label="Email"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
