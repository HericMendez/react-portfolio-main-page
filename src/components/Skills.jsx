import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mysql from "../assets/mysql.png";
import Tailwind from "../assets/tailwind.png";
import Scrum from "../assets/agile.png";
import Tooltip from "./Tooltip";

const Skills = (props) => {
  return (
    <>
      <div
        name="skills"
        className=" w-full md:h-screen bg-bg_light text-title_light dark:bg-bg_dark dark:text-title_dark "
      >
        {/*Container externo */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          {/*Flex container */}
          <div>
            {" "}
            {/* div de título */}
            <div>
              <p className="text-4xl font-bold inline border-b-4 border-detail_light dark:border-detail_dark ">
                {props.translate("Skills", "p_title")}
              </p>
              <p className="py-4">
                {props.translate("Skills", "p_description")}
              </p>
            </div>
          </div>
          {/* fim da div de título */}

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {/*Div grid para os ícones */}

            {/* HTML */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    HTML
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_html_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_html_description")}
                  </p>
                </div>
              }
              direction="right"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img className="w-20 mx-auto " src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
              </div>
            </Tooltip>

            {/* CSS */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    CSS
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_css_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_css_description")}
                  </p>
                </div>
              }
              direction="left"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img className="w-20 mx-auto " src={CSS} alt="HTML icon" />
                <p className="my-4">CSS</p>
              </div>
            </Tooltip>

            {/* JAVASCRIPT */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    JAVASCRIPT
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_js_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_js_description")}
                  </p>
                </div>
              }
              direction="right"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img
                  className="w-20 mx-auto "
                  src={JavaScript}
                  alt="HTML icon"
                />
                <p className="my-4">JavaScript</p>
              </div>
            </Tooltip>

            {/* REACT */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    REACT
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_react_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_react_description")}
                  </p>
                </div>
              }
              direction="left"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img className="w-20 mx-auto " src={ReactImg} alt="HTML icon" />
                <p className="my-4">React</p>
              </div>
            </Tooltip>

            {/* NODE */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    Node.JS
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_node_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_node_description")}
                  </p>
                </div>
              }
              direction="right"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img className="w-20 mx-auto " src={Node} alt="HTML icon" />
                <p className="my-4">Node.JS</p>
              </div>
            </Tooltip>

            {/* TAILWIND */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    TailWindCSS
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_tailwind_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_tailwind_description")}
                  </p>
                </div>
              }
              direction="right"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img className="w-20 mx-auto " src={Tailwind} alt="HTML icon" />
                <p className="my-4">TailwindCSS</p>
              </div>
            </Tooltip>

            {/* MYSQL */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    MySql
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_mysql_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_mysql_description")}
                  </p>
                </div>
              }
              direction="left"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img className="w-20 mx-auto " src={Mysql} alt="HTML icon" />
                <p className="my-4">MySql</p>
              </div>
            </Tooltip>

            {/* D */}
            <Tooltip
              content={
                <div className="bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                  <h3 className="font-bold text-lg text-title_light dark:text-title_dark">
                    Scrum
                  </h3>
                  <p className="border-b-2 dark:border-detail_dark border-detail_light pb-1 dark:text-text_dark">
                    {props.translate("Tooltip", "skills_scrum_meta")}
                  </p>

                  <p className="pt-2 text-xs">
                    {props.translate("Tooltip", "skills_scrum_description")}
                  </p>
                </div>
              }
              direction="left"
              delay="0"
            >
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                <img className="w-20 mx-auto " src={Scrum} alt="HTML icon" />
                <p className="my-4">Scrum</p>
              </div>
            </Tooltip>
          </div>
        </div>
        {/*fim do flex container */}
      </div>
      {/*fim do container externo */}
      <div className="md:py-12 h-[150px] bg-bg_light dark:bg-bg_dark">
        {/*div vazia de espaçamento entre componentes */}
      </div>
    </>
  );
};

export default Skills;
