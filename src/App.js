import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


function App() {
  const [darkmode, setDarkmode] = useState(false)
  const pass_data = (data) => {
    
    setDarkmode(data)
  }
  console.log(darkmode)


  return (
    <div className={darkmode ? "" : "dark"}>
      <Navbar func={pass_data} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
