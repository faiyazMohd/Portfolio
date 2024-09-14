import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <a href="#about" >
            <li>About me</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact me</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
