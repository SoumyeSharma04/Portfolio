import React from "react";
import logo from "../assets/logo.jpeg";
import { FaLinkedin, FaGithub,  FaFile } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://drive.google.com/file/d/1xnXlGi4BNLK2UKF1QoAQaCdPxvFqP28G/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFile />
        </a>
        <a
          href="https://www.linkedin.com/in/soumyesharma04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SoumyeSharma04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
