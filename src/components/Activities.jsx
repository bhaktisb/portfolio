import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";
import isih from "../assets/img/ISIH_WIN.jpg";
import bitathon from "../assets/img/bitathon.jpg";
import lpf from "../assets/img/lpf.jpg";
import vv from "../assets/img/vv.jpg";

const achievements = [
  {
    image: lpf,
    icon: <FaTrophy />,
    title: "Lila Poonawalla Foundation Scholar",
    description:
      "Awarded Lila Poonawalla Foundation Scholarship (2023–2026) for academic excellence.",
    color: "bg-yellow-500",
  },
   {
    image: vv,
    icon: <FaTrophy />,
    title: "SMART INDIA HACKATHON WINNER 2025",
    description:
      "Team RoboRebels",
    color: "bg-yellow-500",
  },
  {
    image: isih,
    icon: <FaMedal />,
    title: "Winner – ISIH Hackathon",
    description:
      "Secured first place among 900+ teams by developing an AI-based solution.",
    color: "bg-blue-500",
  },
  {
    image: bitathon,
    icon: <FaAward />,
    title: "Finalist – BITATHON",
    description:
      "Finalist at GIM × SAS Data Mining Championship.",
    color: "bg-pink-500",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Achievements & <span className="text-blue-400">Recognition</span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 text-center relative">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl mx-auto -mt-12 ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
