import React from "react";
import Slider from "react-slick";
import ubs from "../assets/img/ubs.jpg";
import techalchemy from "../assets/img/techalchemy.png";
import ABVP from "../assets/img/ABVP.png";
import ubs1 from "../assets/img/ubs1.jpg"
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Projects = () => {
  return (
    <div className="w-full px-4 mt-10" id="activities">
      
      <div className="w-full px-4 mt-10" id="activities">
      
      <div className="w-full px-4 mt-10" id="activities">
      <h1 className="pb-8 md:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 text-center">
        ✒ Activities / Achievements
      </h1>
      <div className="slider-container max-w-5xl mx-auto">
        <Slider {...sliderSettings}>
          {/* Activity 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={ubs1}
                alt="Software Innovation'24 by Cummins College and UBS"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  Software Innovation'24 by Cummins College and UBS
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Winner of the Software Innovation Hackathon organized by UBS and Cummins College of Engineering, Pune.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={ubs}
                alt="Software Innovation'24 by Cummins College and UBS"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  Software Innovation'24 by Cummins College and UBS
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Winner of the Software Innovation Hackathon organized by UBS and Cummins College of Engineering, Pune.
                </p>
              </div>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={techalchemy}
                alt="TechAlchathon'24 by TechAlchemy"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  TechAlchathon'24 by TechAlchemy
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Finalist at TechAlchathon, built a Dapp Land Registry System.
                </p>
              </div>
            </div>
          </div>
          {/* Activity 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={ABVP}
                alt="ABVP"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  Volunteer At VIT Pune ABVP Unit
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Managed Social Media During Membership Drive 
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Projects;
