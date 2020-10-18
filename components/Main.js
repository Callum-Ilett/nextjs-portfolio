import "../styles/main.css";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Main() {
  return (
    <div className="main">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Main;
