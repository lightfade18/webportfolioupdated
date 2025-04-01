// imports
import Navbar from "@components/Navbar/page";
import Aboutpage from "@sections/Aboutpage/page";
import Certificates from "@sections/Certificates/page";
import Header from "@sections/Header/page";
import Project from "@sections/Project/page";
import EmailButton from "@components/EmailButton/page";
import Footer from "@sections/Footer/page";
import Experience from "@sections/Experience/page";
import Skills from "@sections/Skills/page";

const Homepage = () => {
  return (
    <div id="home">
      <Navbar decider={true} />
      <div>
        <Header />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="about">
        <Aboutpage />
      </div>
      <EmailButton />
      <Footer />
    </div>
  );
};

export default Homepage;
