import swadeshshop from "../assets/img/swadeshshop.png"
import genderrecognition from "../assets/img/gender.png"
const Projects = () => {
  return ( <div className="w-full px-4 mt-10">
    <h1 className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4">Projects</h1>
    <div className="md:grid md:grid-cols-2 gap-12 px-3 flex flex-col">
    <div className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
    <div className="w-full h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <img src={swadeshshop} alt="" className="w-[80%]" />
      </div>
      <div className="w-full h-[30%] p-3">
        <h2 className=" text-md font-semibold text-gray-600 mb-1">SwadeshShop-Ecommerce Website</h2>
        <p className="hidden md:text-sm font-semibold md:block mb-1">A user-friendly functional ecommerce platform using MERN stack.</p>
        <button className="bg-[#ffdf00] w-[100px] rounded-md font-medium  mx-auto  text-black">Go</button>
      </div>
    </div>
    <div className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300">
    <div className="w-full h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <img src={genderrecognition} alt="" className="w-[80%]" />
      </div>
      <div className="w-full h-[30%] p-3">
        <h2 className=" text-md font-semibold text-gray-600 mb-1">Gender Recongition using Voice</h2>
        <p className="hidden md:text-sm font-semibold md:block mb-1">Shiny app built for the gender identification through voice using xgboost algorithm.</p>
        <button className="bg-[#ffdf00] w-[100px] rounded-md font-medium  mx-auto  text-black">Go</button>
      </div>
    </div>
    
    </div>
  </div> );
}
 
export default Projects;