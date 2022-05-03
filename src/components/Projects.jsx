import workImg from "../assets/workImg.jpg";
import realEstate from "../assets/realestate.jpg";
import htmlWebsite from "../assets/acdcit.png"
import canvasGame from "../assets/flappy.png"

const Projects = () => {
  return (
    <>
    {/*Conteiner externo */}
      <div
        name="projects"
        className="w-full md:h-screen bg-[#0a192f] text-gray-300 "
      >
        
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          {/*Div título */}
          <div className="pb-8">
            
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              My Projects
            </p>
            <p className="py-6">
              These are some of my recent work and personal projects.
            </p>
          </div>

          {/* fim da Div título */}
        
        {/*conteiner do grid de cards*/}
        <div
          
          className="grid sm:grid-cols-1 md:grid-cols-2 md:mb-[100px]
           gap-8 text-center"
        >
          


          {/*item do grid */}
          <div style={{ backgroundImage: `url(${htmlWebsite})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
            
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">HTML Multilanguage Page</span>
              <div>
                <a href="https://www.acdcit.com.br/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* fim do item do grid */}


          {/*item do grid */}
          <div style={{ backgroundImage: `url(${canvasGame})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
            
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">HTML Canvas Game (Flappy Bird Clone)</span>
              <div>
                <a href="https://hericmendez.github.io/Flappyvania-Canvas/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/HericMendez/Flappyvania-Canvas" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* fim do item do grid */}


          {/*item do grid */}
          <div style={{ backgroundImage: `url(${workImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">ReactJS Placeholder Project</span>
              <div>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* fim do item do grid */}


          {/*item do grid */}
          <div style={{ backgroundImage: `url(${realEstate})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">ReactJS Placeholder Project</span>
              <div>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* fim do item do grid */}



          
        </div>
        {/* fim do conteiner do grid de cards*/}
        </div>
      </div>{" "}
      {/*fim do conteiner externo */}
    </>
  );
};

export default Projects;
