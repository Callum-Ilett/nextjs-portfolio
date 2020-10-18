import "../styles/portfolio.css";

import Gallery from "./Gallery";

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="section__inner">
        <div className="section__intro">
          <h2 className="section__title">Portfolio</h2>
          <h5 className="section__description">My Works</h5>
        </div>

        <div className="section__content">
          <Gallery />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
