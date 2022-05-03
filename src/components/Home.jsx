import { HiArrowNarrowRight } from "react-icons/hi";
import {FaLightbulb} from 'react-icons/fa'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen min-w-[300px] bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className=" text-xl text-pink-600">Hi, my name is</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Heric Mendes
        </h2>
        <h3 className="text-2xl sm:text-5xl font-bold pb-5 text-[#8892b0]">
          I am a Front-end Developer.
        </h3>
        <p className="text-[#8892b0] py-4  max-width-[700px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet fringilla lacus. Integer lobortis felis quis dapibus vulputate.
          Nulla ex nibh, maximus quis hendrerit eu, malesuada sit amet ex.
          Pellentesque a urna dolor.
        </p>
        <div className="flex">
          <button className="group outline p-3 m-5 flex items-center hover:bg-pink-600  outline-pink-600 text-[#ccd6f6] text-bold ">
            View my work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
          <button className=" hidden group p-3 m-5 flex items-center text-[#ccd6f6] text-bold ">
            
            <span className=" flex group-hover:invert duration-300">
            Turn the lights off <FaLightbulb className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
