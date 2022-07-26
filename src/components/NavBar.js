import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
  <a href="#home" key={links.index}>home</a>
  <a href="#about" key= {links[1]}>about</a>
  <a href="#projects" key= {links[2]}>projects</a>
  </nav>;
}

export default NavBar;
