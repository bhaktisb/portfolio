import React from "react";
import medplant from "../assets/img/medplant.png"; 
import fraud from "../assets/img/fraud.png";
import gym from "../assets/img/gym.jpg";

const Projects = () => {
  const projects = [
    {
      title: "MedPlant",
      img: medplant,
      desc: "Built a CNN-based medicinal plant identification app with a Flask backend and plant booking portal. Users can classify Ayurvedic plant leaves from image inputs and reserve plants online.",
    },
    {
      title: "Fraud Shield Scam Detection",
      img: fraud,
      desc: "Developed a multi-modal fraud detection system using BERT for text, CNN for audio (MFCC), and Random Forest for metadata. Integrated a Flask backend with voting logic for real-time inference.",
    },
    {
      title: "Gym Management System",
      img: gym,
      desc: "Created a web-based system for managing gym operations including member registration, trainer assignment, and scheduling. Developed using PHP and MySQL with a responsive UI.",
    }
  ];

  return (
    <div className="w-full px-4 mt-10" id="projects">
      <h1 className="pb-8 md:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 text-center">
        📕 Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-12 px-3 mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 mx-auto"
          >
            <div className="relative w-full h-60 md:h-80 flex items-center justify-center overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base font-light leading-tight">
                  {project.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
