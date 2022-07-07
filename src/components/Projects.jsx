import htmlWebsite from "../assets/acdcit.png";
import CoinApp from "../assets/coinapp.jpeg";
import TableApp from "../assets/table.jpeg";
import Form from "../assets/form.jpeg";
import canvasGame from "../assets/flappy.png";
import Filme from '../assets/filme.jpeg'
import Pokedex from '../assets/pokedex.jpeg'
import Tooltip from "./Tooltip";

const Projects = (props) => {
  return (
    <>
      {/*Conteiner externo */}
      <div
        name="projects"
        className="w-full md:h-screen bg-bg_light dark:bg-bg_dark text-text_light dark:text-title_dark flex flex-wrap "
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          {/*Div título */}
          <div className="pb-8">
            <p className=" mt-12 text-4xl font-bold inline border-b-4 text-title_light dark:text-title_dark border-detail_light dark:border-detail_dark">
              {props.translate("Projects", "p_title")}
            </p>
            <p className="py-6">
              {props.translate("Projects", "p_description")}
            </p>
          </div>

          {/* fim da Div título */}

          {/*conteiner do grid de cards*/}
          <div
            className="grid sm:grid-cols-1 md:grid-cols-3 
           gap-8 text-center"
          >
            {/*item 1 do grid */}

            <Tooltip
              content={
                <div className="w-[70vw] md:w-[30vw] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    {props.translate("Tooltip", "project_1_title")}
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "project_1_meta")}
                  </p>

                  <p className="py-2 text-xs">
                    {props.translate("Tooltip", "project_1_description")}
                  </p>
                  <p className="font-bold text-xs dark:text-text_dark">
                    {props.translate("Tooltip", "project_1_tech")}
                  </p>
                </div>
              }
              direction="bottom"
              delay="0"
            >
              <div
                style={{ backgroundImage: `url(${htmlWebsite})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {props.translate("Projects", "project1_title")}
                  </span>
                  <div>
                    <a
                      href="https://www.acdcit.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>

            {/* fim do item 1 do grid */}

            {/*item 2 do grid */}
            <Tooltip
              content={
                <div className="w-[70vw] md:w-[30vw] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    {props.translate("Tooltip", "project_2_title")}
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "project_2_meta")}
                  </p>

                  <p className="py-2 text-xs">
                    {props.translate("Tooltip", "project_2_description")}
                  </p>
                  <p className="font-bold text-xs dark:text-text_dark">
                    {props.translate("Tooltip", "project_2_tech")}
                  </p>
                </div>
              }
              direction="bottom"
              delay="0"
            >
              <div
                style={{ backgroundImage: `url(${CoinApp})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {props.translate("Projects", "project2_title")}
                  </span>
                  <div>
                    <a
                      href="https://crypto-currency-app-mocha.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href="https://github.com/HericMendez/CryptoCurrency-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>
            {/* fim do item 2 do grid */}

            {/*item 3 do grid (placeholder) */}
            <Tooltip
              content={
                <div className="w-[70vw] md:w-[30vw] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    {props.translate("Tooltip", "project_3_title")}
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "project_3_meta")}
                  </p>

                  <p className="py-2 text-xs">
                    {props.translate("Tooltip", "project_3_description")}
                  </p>
                  <p className="font-bold text-xs dark:text-text_dark">
                    {props.translate("Tooltip", "project_3_tech")}
                  </p>
                </div>
              }
              direction="bottom"
              delay="0"
            >
              <div
                style={{ backgroundImage: `url(${TableApp})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {props.translate("Projects", "project3_title")}
                  </span>
                  <div>
                    <a
                      href="https://react-search-component.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/HericMendez/react-search-component">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>
            {/* fim do item 3 do grid */}

            {/*item 4 do grid*/}
            <Tooltip
              content={
                <div className="w-[70vw] md:w-[30vw] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    {props.translate("Tooltip", "project_4_title")}
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "project_4_meta")}
                  </p>

                  <p className="py-2 text-xs">
                    {props.translate("Tooltip", "project_4_description")}
                  </p>
                  <p className="font-bold text-xs dark:text-text_dark">
                    {props.translate("Tooltip", "project_4_tech")}
                  </p>
                </div>
              }
              direction="bottom"
              delay="0"
            >
              <div
                style={{ backgroundImage: `url(${Form})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {props.translate("Projects", "project4_title")}
                  </span>
                  <div>
                    <a
                      href="https://react-form-sand.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href="https://github.com/HericMendez/react-form"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>
            {/* fim do item 4 do grid */}

            {/*item 5 do grid*/}
            <Tooltip
              content={
                <div className="w-[70vw] md:w-[30vw] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    {props.translate("Tooltip", "project_5_title")}
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "project_5_meta")}
                  </p>

                  <p className="py-2 text-xs">
                    {props.translate("Tooltip", "project_5_description")}
                  </p>
                  <p className="font-bold text-xs dark:text-text_dark">
                    {props.translate("Tooltip", "project_5_tech")}
                  </p>
                </div>
              }
              direction="bottom"
              delay="0"
            >
              <div
                style={{ backgroundImage: `url(${canvasGame})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {props.translate("Projects", "project5_title")}
                  </span>
                  <div>
                    <a
                      href="https://hericmendez.github.io/Flappyvania-Canvas/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href="https://github.com/HericMendez/Flappyvania-Canvas/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>
            {/* fim do item 5 do grid */}

            {/*item 6 do grid*/}
            <Tooltip
              content={
                <div className="w-[70vw] md:w-[30vw] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    {props.translate("Tooltip", "project_6_title")}
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "project_6_meta")}
                  </p>

                  <p className="py-2 text-xs">
                    {props.translate("Tooltip", "project_6_description")}
                  </p>
                  <p className="font-bold text-xs dark:text-text_dark">
                    {props.translate("Tooltip", "project_6_tech")}
                  </p>
                </div>
              }
              direction="bottom"
              delay="0"
            >
              <div
                style={{ backgroundImage: `url(${Filme})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {props.translate("Projects", "project6_title")}
                  </span>
                  <div>
                    <a
                      href="https://hericmendez.github.io/filminho-generator/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href="https://hericmendez.github.io/filminho-generator/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>
            {/* fim do item 6 do grid */}

            {/*item F do grid*/}
            <Tooltip
              content={
                <div className="w-[70vw] md:w-[30vw] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    {props.translate("Tooltip", "project_7_title")}
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "project_7_meta")}
                  </p>

                  <p className="py-2 text-xs">
                    {props.translate("Tooltip", "project_7_description")}
                  </p>
                  <p className="font-bold text-xs dark:text-text_dark">
                    {props.translate("Tooltip", "project_7_tech")}
                  </p>
                </div>
              }
              direction="bottom"
              delay="0"
            >
              <div
                style={{ backgroundImage: `url(${Pokedex})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {props.translate("Projects", "project7_title")}
                  </span>
                  <div>
                    <a
                      href="https://pokenodejs.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href="https://github.com/HericMendez/pokedex-react-frontend"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>
            {/* fim do item 4 do grid */}
          </div>
          {/* fim do conteiner do grid de cards*/}
        </div>
      </div>{" "}
      {/*fim do conteiner externo */}
      <div className="md:py-12 bg-bg_light dark:bg-bg_dark">
        {/*div vazia de espaçamento entre componentes */}
      </div>
    </>
  );
};

export default Projects;
