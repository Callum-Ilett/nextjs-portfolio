import "../styles/about.css";

import Services from "./Services";
import Testimonial from "./Testimonial";

function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <div className="section__intro">
          <h2 className="section__title">About Me</h2>
          <h5 className="section__description">
            Artsit, Thinker, Creative Doer
          </h5>
        </div>

        <div className="section__content">
          <div className="section__row">
            <div className="section__column">
              <h3>I am Web Developer @ Company.com</h3>
              <p>
                I have experience in developing for a wide range of clients and
                businesses. My ability as a web developer allows me to create
                everything from small business websites, to live bidding
                platforms, eCommerce stores, blogs, booking systems, finance
                systems, business portals, health and hospital systems, online
                business systems, eLearning platforms and user interfaces
              </p>
              <p>
                Despite being London & Hertfordshire based, I can work with
                clients all over the world. Furthermore, I also offer long-term
                support, hosting/domain advice, and more.
              </p>
            </div>

            <div className="section__column">
              <div className="section__testimonials">
                <h3 className="section__subtitle">Testimonials</h3>
                <Testimonial />
              </div>
            </div>
          </div>

          <h3 className="section__subtitle">Services</h3>

          <div className="section__services">
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
