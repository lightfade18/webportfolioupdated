import Aboutpage from "@sections/Aboutpage/page";
import Certificates from "@sections/Certificates/page";
import Header from "@sections/Header/page";

const Homepage = () => {
    return (
      <div>
        <Header/>
        <div id="about-section">
          <Aboutpage/>
        </div>
        <div id="about-section">
          <Certificates/>
        </div>
        
      </div>
    )
  }
  
  export default Homepage;