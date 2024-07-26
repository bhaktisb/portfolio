
import catalyst from "../assets/img/catalyst.png"

import techalchemy from "../assets/img/techalchemy.png"
const Projects = () => {
  return (
    <div className="w-full px-4 mt-10" id="projects">
      <h1 className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4">
        Activities
      </h1>
      <div className="md:grid md:grid-cols-2 gap-12 px-3 flex flex-col">
        <div className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <img src={catalyst} alt="" className="w-[50%]" />
          </div>
          <div className="w-full h-[30%] p-3">
            <h2 className="text-md font-semibold text-gray-600 mb-1">
              The Catalyst- Technical Chief
            </h2>
            <p className="hidden md:text-sm font-semibold md:block mb-1">
              Associated since 2023
            </p>
            {/* <a
              href="https://swadeshshop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffdf00] w-[100px] rounded-md font-medium text-center text-black"
            >
              <button className="w-full h-full">Go</button>
            </a> */}
          </div>
        </div>
        <div className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
          <div className="w-full h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <img src={techalchemy} alt="" className="w-[50%]" />
          </div>
          <div className="w-full h-[30%] p-3">
            <h2 className="text-md font-semibold text-gray-600 mb-1">
              TechAlchathon by TechAlchemy
            </h2>
            <p className="hidden md:text-sm font-semibold md:block mb-1">
              Participated in hackathon and built the dapp platform for land ownership tranfer
            </p>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
