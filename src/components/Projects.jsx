import { FaGithub } from "react-icons/fa";

const projects = [
  {
    badge: "🤖 AI-Powered Scam Detection",
    title: "Fraud Shield Scam Detection",
    description:
      "Multi-modal scam detection system using BERT, CNN (MFCC), and Random Forest with Flask backend and automated testing.",
    tech: ["Python", "Flask", "BERT", "CNN", "ML"],
    github: "https://github.com/bhaktisb/FraudShield-Scam-Detection-System",
  },
  {
    badge: "🧪 Test Automation Platform",
    title: "Test Track",
    description:
      "Role-based bug tracking and test management system using React, Flask, MySQL with CI/CD pipelines and Selenium automation.",
    tech: ["React", "Flask", "MySQL", "Selenium", "PyTest"],
    github: "https://github.com/bhaktisb/TestTrack",
  },
  {
    badge: "🌱 Sustainability Project",
    title: "Med Plant Detection",
    description:
      "CNN-based medicinal plant identification system with Flask web app and booking portal.",
    tech: ["Python", "Flask", "CNN", "Computer Vision"],
    github: "https://github.com/bhaktisb/MedPlant",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-700 rounded-2xl p-6 flex flex-col hover:border-blue-500 transition"
          >
            <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit mb-4">
              {project.badge}
            </span>

            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-2 border border-gray-600 hover:border-blue-500 rounded-lg py-2"
            >
              <FaGithub /> Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
