import { useState } from "react";
import Logo from "../assets/placeholder-logo.png";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import FlagBR from "../assets/country-br.png";
import FlagUS from "../assets/country-us.png";
import { Link } from "react-scroll";
import Tooltip from "./Tooltip";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const menuClickHandler = () => setNav(!nav);

  const [darkmode, setDarkmode] = useState(false);
  const darkmodeHandler = () => setDarkmode(!darkmode);

  const [lang, setLang] = useState(false);
  const langHandler = () => setLang(!lang);

  props.dark(darkmode);
  props.lang(lang);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-navbar_light text-title_light dark:bg-bg_dark dark:text-title_dark z-100">
      <div>
        <img
          className="hidden"
          src={Logo}
          alt="Main Logo"
          style={{ width: "55px" }}
        />
      </div>
      {/*Menu Desktop*/}
      <div className="hidden md:flex">
        <ul className="md:flex">
          <li className="hover:text-detail_light dark:hover:text-detail_dark">
            <Link to="home" smooth={true} duration={500}>
              {props.translate("Navbar", "Home")}
            </Link>
          </li>
          <li className="hover:text-detail_light dark:hover:text-detail_dark">
            <Link to="about" smooth={true} duration={500}>
              {props.translate("Navbar", "About")}
            </Link>
          </li>
          <li className="hover:text-detail_light dark:hover:text-detail_dark">
            <Link to="skills" smooth={true} duration={500}>
              {props.translate("Navbar", "Skills")}
            </Link>
          </li>
          <li className="hover:text-detail_light dark:hover:text-detail_dark">
            <Link to="projects" smooth={true} duration={500}>
              {props.translate("Navbar", "Projects")}
            </Link>
          </li>

          <li className="hover:text-detail_light dark:hover:text-detail_dark">
            <Link to="contact" smooth={true} duration={500}>
              {props.translate("Navbar", "Contact")}
            </Link>
          </li>

          <li
            onClick={langHandler}
            className="hover:text-detail_light dark:hover:text-detail_dark  justify-center"
          >
            {!lang ? (
              <p className="inline-flex align-center justify-center">
                <p className="px-1">
                  <img className="w-5" src={FlagUS} alt="" />
                </p>
                English
              </p>
            ) : (
              <p className="inline-flex align-center justify-center">
                <p className="px-1">
                  <img className="w-5" src={FlagBR} alt="" />
                </p>
                Português
              </p>
            )}
          </li>
          <li
            onClick={darkmodeHandler}
            className="hover:text-detail_light dark:hover:text-detail_dark  justify-center"
          >
            {!darkmode ? (
              <p className="inline-flex align-center justify-center">
                <p className="p-1">
                  <FaMoon />
                </p>
                Dark Mode
              </p>
            ) : (
              <p className="inline-flex align-center justify-center">
                <p className="p-1">
                  <FaSun />
                </p>
                Light Mode
              </p>
            )}
          </li>
        </ul>
      </div>
      {/*hamburger icon (for mobile menu)*/}
      <div className="md:hidden flex flex-row">
        <div
          onClick={darkmodeHandler}
          className={nav ? "hidden" : "p-3 text-3xl"}
        >
          {!darkmode ? <FaMoon /> : <FaSun />}
        </div>

        <div onClick={langHandler} className={nav ? "hidden" : "p-3 text-3xl"}>
          {!lang ? (
            <img src={FlagUS} className="w-8" alt="BR"></img>
          ) : (
            <img src={FlagBR} className="w-8" alt="US"></img>
          )}
        </div>

        <div
          onClick={menuClickHandler}
          className="md:hidden flex text-3xl z-10"
        >
          {!nav ? (
            <div className="flex flex-row ">
              <div className="p-3">
                <FaBars />
              </div>
            </div>
          ) : (
            <div className="p-3 text-3xl hover:text-detail_light dark:hover:text-detail_dark">
              <FaTimes />
            </div>
          )}
        </div>
      </div>
      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-[250px] h-screen bg-bg_light dark:bg-bg_dark flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl hover:text-detail_light dark:hover:text-detail_dark">
          <Link
            onClick={menuClickHandler}
            to="home"
            smooth={true}
            duration={500}
          >
            {props.translate("Navbar", "Home")}
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-detail_light dark:hover:text-detail_dark">
          <Link
            onClick={menuClickHandler}
            to="about"
            smooth={true}
            duration={500}
          >
            {props.translate("Navbar", "About")}
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-detail_light dark:hover:text-detail_dark">
          <Link
            onClick={menuClickHandler}
            to="skills"
            smooth={true}
            duration={500}
          >
            {props.translate("Navbar", "Skills")}
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-detail_light dark:hover:text-detail_dark">
          <Link
            onClick={menuClickHandler}
            to="projects"
            smooth={true}
            duration={500}
          >
            {props.translate("Navbar", "Projects")}
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-detail_light dark:hover:text-detail_dark">
          <Link
            onClick={menuClickHandler}
            to="contact"
            smooth={true}
            duration={500}
          >
            {props.translate("Navbar", "Contact")}
          </Link>
        </li>
      </ul>

      {/*Social icons (side)  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between w-full items-center text-gray-300"
              href="https://www.linkedin.com/in/hericmendes/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-800">
            <a
              className="flex justify-between w-full items-center text-gray-300"
              href="https://github.com/HericMendez"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a
              className="flex justify-between w-full items-center text-gray-300"
              href="mailto:heric.mendez00@gmail.com?subject=&cc="
              target="_blank"
              rel="noreferrer"
            >
              Gmail <SiGmail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
            <a
              className="flex justify-between w-full items-center text-gray-300"
              href="https://api.whatsapp.com/send?phone=5516993868494&text=Ol%C3%A1!%20Eu%20estou%20interessado%20em%20seu%20trabalho%20como%20desenvolvedor.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>

          <Tooltip
            content={
              <div className="w-[150px] bg-white dark:bg-[#222] p-2 rounded-md shadow-lg shadow-slate-600 dark:shadow-black">
                <p className="font-bold text-xs text-title_light dark:text-title_dark">
                  {props.translate("Tooltip","navbar_cv")}
                </p>
              </div>
            }
            direction="right"
            delay="0"
          >
            <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
              <a
                className="flex justify-between w-full items-center text-gray-300"
                href="#"
                download="#"
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </Tooltip>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
