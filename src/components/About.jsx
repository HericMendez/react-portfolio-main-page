const About = () => {
  return (
    <>
      <div name="about" className="w-full h-screen bg-bg_light text-title_light dark:text-title_dark dark:bg-bg_dark">
        {/*Container externo */}
        <div className="flex flex-col justify-center items-center w-full h-full">

          {/*Container flex interno */}
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">{/*grid da esquerda */}
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-detail_light dark:border-detail_dark ">
                About Me
              </p>
            </div>
            <div></div> {/* Div vazia p/ alinhamento */}
          </div>{/*fim do grid da esquerda*/}

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">{/* grid da direita*/}
            <div className="sm:text-right text-4xl font-bold ">
                <p>Hi, my name is Heric, and this is my professional front-end portfolio website.</p>
            </div>
            <div className="text-text_light dark:text-text_dark">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, nisi nec imperdiet eleifend, sem nulla fringilla felis, volutpat iaculis orci arcu vel velit. Morbi euismod quis odio at blandit. Cras porta vestibulum dapibus. Vestibulum porta, diam et interdum commodo, augue dolor pretium nunc, et interdum neque dolor ac nisl.</p>
            
            </div>
          </div> {/*Fim do grid da direita */}
          
        </div>
        {/*fim do container flex interno */}
      </div>
      {/* fim do container externo */}
      <div className="md:py-6 bg-bg_light dark:bg-bg_dark">
      {/*div vazia de espaçamento entre componentes */}
    </div>
    </>
  );
};

export default About;
