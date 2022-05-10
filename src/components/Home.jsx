import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-scroll/modules";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-bg_light dark:bg-bg_dark">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className=" text-xl font-bold text-detail_light dark:text-detail_dark">
          Hi, my name is
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold text-title_light dark:text-title_dark">
          Heric Mendes
        </h2>
        <h3 className="text-2xl sm:text-5xl font-bold pb-5 text-text_light dark:text-text_dark">
          I am a Front-end Developer.
        </h3>
        <p className="font_bold text-text_light dark:text-text_dark py-4  max-width-[700px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet fringilla lacus. Integer lobortis felis quis dapibus vulputate.
          Nulla ex nibh, maximus quis hendrerit eu, malesuada sit amet ex.
          Pellentesque a urna dolor.
        </p>
        <div className="flex">
          <Link to="projects" smooth={true} duration={500}>
            <button className="group outline p-3 m-5 flex items-center outline-detail_light text-detail_light hover:bg-detail_light dark:outline-detail_dark  dark:text-detail_dark font-bold   dark:hover:bg-detail_dark hover:text-title_dark dark:text-title_dark">
              View my work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
