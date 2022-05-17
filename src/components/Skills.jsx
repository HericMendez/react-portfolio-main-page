import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mysql from "../assets/mysql.png"
import GitHub from "../assets/github.png";
import Scrum from "../assets/agile.png";


const Skills = (props) => {
  return (
      <>
    <div name="skills" className=" w-full md:h-screen bg-bg_light text-title_light dark:bg-bg_dark dark:text-title_dark ">
      {/*Container externo */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">{/*Flex container */}
        <div> {/* div de título */}
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-detail_light dark:border-detail_dark ">{props.translate("Skills", "p_title")}</p>
            <p className="py-4">{props.translate("Skills", "p_description")}</p>
          </div>
        </div>{/* fim da div de título */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">{/*Div grid para os ícones */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={JavaScript} alt="HTML icon" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={Node} alt="HTML icon" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={Mysql} alt="HTML icon" />
            <p className="my-4">MySql</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={GitHub} alt="HTML icon" />
            <p className="my-4">Github</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={Scrum} alt="HTML icon" />
            <p className="my-4">Scrum</p>
          </div>


         
        </div>
      </div>{/*fim do flex container */}
    </div>{/*fim do container externo */}
    <div className="md:py-12 bg-bg_light dark:bg-bg_dark">
      {/*div vazia de espaçamento entre componentes */}
    </div>
    </>
  );
};

export default Skills;
