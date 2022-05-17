import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll/modules";



const Home = (props) => {

  return (
    <div name="home" className="w-full h-screen bg-bg_light dark:bg-bg_dark">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className=" text-xl font-bold text-detail_light dark:text-detail_dark">
        {props.translate("Home", "p_hello")}
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold text-title_light dark:text-title_dark">
        {props.translate("Home", "h2_name")}
        </h2>
        <h3 className="text-2xl sm:text-5xl font-bold pb-5 text-text_light dark:text-text_dark">
        {props.translate("Home", "h3_title")}
        </h3>
        <p className="font_bold text-text_light dark:text-text_dark py-4  max-width-[700px] ">
          {props.translate("Home", "p_text")}
        </p>
        <div className="flex">
          <Link to="projects" smooth={true} duration={500}>
            <button className="group outline p-3 m-5 flex items-center outline-detail_light text-detail_light hover:bg-detail_light dark:outline-detail_dark  dark:text-detail_dark font-bold   dark:hover:bg-detail_dark hover:text-title_dark dark:hover:text-title_dark">
            {props.translate("Home", "button_work")}
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
