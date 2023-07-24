import Aboutpage from "@sections/Aboutpage/page";
import Certificates from "@sections/Certificates/page";
import Header from "@sections/Header/page";
import Project from "@sections/Project/page";

const Homepage = () => {
    return (
      <div>
        <Header/>
        <div id="about-section">
          <Aboutpage/>
        </div>
        <div id="cert-section">
          <Certificates/>
        </div>
        <div id="proj-section">
          <Project/>
        </div>
      </div>
    )
  }
  
  export default Homepage;