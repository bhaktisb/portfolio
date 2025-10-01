import React from "react";
import Slider from "react-slick";
import ISIH_WIN from "../assets/img/ISIH_WIN.jpg";  
import lpf from "../assets/img/lpf.jpg";  
import bitathon from "../assets/img/bitathon.jpg"; 
import inlight from "../assets/img/inlight.jpg";   

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

const Activities = () => {
  return (
    <div className="w-full px-4 mt-10" id="activities">
      <h1 className="pb-8 md:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 text-center">
        ✒ Achievements & Activities
      </h1>
      <div className="slider-container max-w-5xl mx-auto">
        <Slider {...sliderSettings}>
              {/* Activity 1: INTERNAL SMART INDIA HACKTHON WINNER */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={ISIH_WIN}
                alt="LPF Scholarship"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  Internal Smart India Hackthon Winner
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Winner of the Internal Smart India Hackathon (2025) for developing an innovative solution 
        to real-world problem statements.
                </p>
              </div>
            </div>
          </div>
          {/* Activity 2: LPF */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={lpf}
                alt="LPF Scholarship"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  LPF Scholarship Awardee
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Awarded the prestigious Lila Poonawalla Foundation Scholarship for Engineering Students (2021–22) for academic excellence and leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Activity 3: BITATHON */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={bitathon}
                alt="BITATHON Finalist"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  BITATHON Finalist
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Finalist at BITATHON – Data Analytics & Mining Championship organized by GIM and SAS.
                </p>
              </div>
            </div>
          </div>

          {/* Activity 4: Inlight Internship */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={inlight}
                alt="Inlight Internship"
                className="object-contain max-w-[90%] max-h-[90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  Web Development Internship
                </h2>
                <p className="text-xs md:text-sm font-light leading-tight">
                  Successfully completed full-stack web development internship at Inlight Technologies, Latur, applying practical web dev skills.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Activities;
