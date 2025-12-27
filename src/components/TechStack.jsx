import { FaCode, FaGlobe, FaTools, FaBug, FaBook } from "react-icons/fa";

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Skills & <span className="text-blue-400">Expertise</span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Languages */}
        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/20 text-blue-400 p-3 rounded-xl">
              <FaCode size={22} />
            </div>
            <h3 className="text-xl font-semibold">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {["C++", "Java", "Python", "MySQL"].map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-500/20 text-pink-400 p-3 rounded-xl">
              <FaGlobe size={22} />
            </div>
            <h3 className="text-xl font-semibold">Web Development</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Flask",
              "RESTful APIs",
            ].map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        {/* DevOps & Tools */}
        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-500/20 text-orange-400 p-3 rounded-xl">
              <FaTools size={22} />
            </div>
            <h3 className="text-xl font-semibold">DevOps & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Git",
              "GitHub",
              "GitHub Actions",
              "Docker (Basic)",
              "Linux",
              "Firebase",
              "Postman",
              "Agile (Kanban Framework)",
            ].map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        {/* Testing & QA */}
        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-500/20 text-red-400 p-3 rounded-xl">
              <FaBug size={22} />
            </div>
            <h3 className="text-xl font-semibold">Testing & QA</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Selenium",
              "PyTest",
              "JUnit",
              "Unit Testing",
              "Regression Testing",
              "Automation Testing",
              "API Testing",
            ].map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        {/* Core CS Concepts */}
        <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-500/20 text-indigo-400 p-3 rounded-xl">
              <FaBook size={22} />
            </div>
            <h3 className="text-xl font-semibold">Core CS Concepts</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Data Structures & Algorithms",
              "OOP",
              "DBMS",
              "Computer Networks",
              "Operating Systems",
            ].map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
