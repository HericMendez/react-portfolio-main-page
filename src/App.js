import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

import PTBR from '../src/translations/pt-br.json'
import ENUS from '../src/translations/en-us.json'


function App() {
  const [darkmode, setDarkmode] = useState(true)
  const [portuguese, setPtbr] = useState(false)
  const language_data = (langdata) => setPtbr(langdata)
  const darkmode_data = (data) => setDarkmode(data)
  
  console.log(portuguese)

  const translate = (section, content) => {
    if(portuguese){
      return PTBR[section][content];;
    }
    else{
      return ENUS[section][content];
    }

  };

  

    



  return (
    <div className={darkmode ? "" : "dark"}>
      <Navbar dark={darkmode_data} lang={language_data} translate={translate}/>
      <Home translate={translate}/>
      <About translate={translate}/>
      <Skills translate={translate}/>
      <Projects translate={translate}/>
      <Contact translate={translate}/>
      <Footer translate={translate}/>

    </div>
  );
}

export default App;
