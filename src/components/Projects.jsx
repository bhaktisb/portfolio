import genderrecognition from "../assets/img/gender.png";
import fraudcall from "../assets/img/fraudcall.jpg";
import autoforest from "../assets/img/autoforest.png"

const Projects = () => {
  return (
    <div className="w-full px-4 mt-10" id="projects">
      <h1 className="pb-8 md:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 text-center">
        📕 Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-12 px-3 mx-auto max-w-7xl">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 mx-auto">
          <div className="relative w-full h-60 md:h-80 flex items-center justify-center overflow-hidden">
            <img
              src={genderrecognition}
              alt="Gender Recognition"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Gender Recognition using Voice
              </h2>
              <p className="text-sm md:text-base font-light leading-tight">
                Developed a Shiny app for gender recognition by extracting MFCC
                features and applying XGBoost.
              </p>
            </div>
          </div>
          <div className="p-4 flex justify-center items-center">
            <button className="bg-[#ffdf00] text-black rounded-lg px-6 py-3 font-semibold hover:bg-[#ffd700] transition-colors duration-300"
            onClick={() => window.open('https://github.com/samarth49/voice-recognition.git', '_blank')}>
              Learn More
            </button>
          </div>
        </div>
        
        {/* Project 3: Fraud Call Detection */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 mx-auto">
          <div className="relative w-full h-60 md:h-80 flex items-center justify-center overflow-hidden">
            <img
              src={fraudcall} // Add your image path here
              alt="Fraud Call Detection"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Fraud Call Detection
              </h2>
              <p className="text-sm md:text-base font-light leading-tight">
                Developed an AI-based system for detecting fraudulent calls using
                BERT. Integrated an LLM model for sophisticated analysis
                and utilized the Twilio API for call database and robo calling.
              </p>
            </div>
          </div>
          <div className="p-4 flex justify-center items-center">
            {/* <button className="bg-[#ffdf00] text-black rounded-lg px-6 py-3 font-semibold hover:bg-[#ffd700] transition-colors duration-300">
              Learn More
            </button> */}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 mx-auto">
          <div className="relative w-full h-60 md:h-80 flex items-center justify-center overflow-hidden">
            <img
              src={autoforest}
              alt="autoforest plantbot"
              className="object-fit w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            <div className="absolute bottom-6 left-6 text-red">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
              AutoForest Plant Bot (present)
              </h2>
              <p className="text-sm md:text-base font-light leading-tight">
              Utilized the DeepForest package to count tree crowns in aerial images for accurate tree enumeration.
              Applied image processing techniques and the A* to optimize pathfinding, 
              Integrated a Flask backend with a React frontend and established a connection between the web server and a 
              Raspberry Pi for seamless data exchange.
              </p>
            </div>
          </div>
          <div className="p-4 flex justify-center items-center">
            <button className="bg-[#ffdf00] text-black rounded-lg px-6 py-3 font-semibold hover:bg-[#ffd700] transition-colors duration-300"
            onClick={() => window.open('https://github.com/samarth49/AutoForestFinal.git', '_blank')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
