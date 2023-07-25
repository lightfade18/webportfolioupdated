'use client';

import Navbar from "@components/Navbar/page";
import Aboutpage from "@sections/Aboutpage/page";
import Certificates from "@sections/Certificates/page";
import Header from "@sections/Header/page";
import Project from "@sections/Project/page";

const Homepage = () => {
    return (
      <div>
        <Navbar
          decider={true}
        />
        <div id="home">
          <Header/>
        </div>
        <div id="about">
          <Aboutpage/>
        </div>
        <div id="certificates">
          <Certificates/>
        </div>
        <div id="projects">
          <Project/>
        </div>
      </div>
    )
  }
  
  export default Homepage;