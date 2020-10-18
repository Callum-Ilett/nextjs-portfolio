import "../styles/home.css";

import GetApp from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Typed from "react-typed";

function Home() {
  return (
    <section className="section" id="home">
      <div className="section__container">
        <div className="section__intro">
          <h2>Callum Ilett</h2>
          <p>
            <span className="section__subHeadline">I am a </span>
            <Typed
              className="section__headline"
              strings={[
                "Freelancer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </p>

          <div className="buttons">
            <a
              href="https://www.callumilett.com/uploads/Callum-Ilett(CV).pdf"
              className="btn btn--primary mr-2"
              target="_blank"
            >
              <GetApp />
              View Resume
            </a>

            <a href="#portfolio" className="btn btn--theme">
              <VisibilityIcon />
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
