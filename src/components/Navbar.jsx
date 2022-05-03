import { useState } from "react";
import Logo from "../assets/placeholder-logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { SiGmail } from "react-icons/si"
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuClickHandler = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Main Logo" style={{ width: "55px" }} />
      </div>
      {/*Menu Desktop*/}
      <div className="hidden md:flex">
        <ul className="md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      {/*hamburger icon (for mobile menu)*/}
      <div onClick={menuClickHandler} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/*Social icons (side)  */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li  className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a  className="flex justify-between w-full items-center text-gray-300" href="#">Linkedin <FaLinkedin size={30} /></a>
          </li>

          <li  className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-800">
            <a  className="flex justify-between w-full items-center text-gray-300" href="#">Github <FaGithub size={30} /></a>
          </li>

          <li  className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a  className="flex justify-between w-full items-center text-gray-300" href="#">Gmail <SiGmail size={30} /></a>
          </li>

          <li  className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
            <a  className="flex justify-between w-full items-center text-gray-300" href="#">Whatsapp <FaWhatsapp size={30} /></a>
          </li>

          <li  className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a  className="flex justify-between w-full items-center text-gray-300" href="#">Resume<BsFillPersonLinesFill size={30} /></a>
          </li>
         
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
