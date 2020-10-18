import "../styles/testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial__content">
        <div className="testimonial__text">
          <p>
            "Callum goes above and beyond to create clean code and UI within
            time and budget"
          </p>
        </div>
      </div>

      <div className="testimonial__credits">
        <div className="testimonial__picture">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.0-9/20953425_10212343179767711_1734264109383754182_n.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_ohc=2_IAMKr2lGAAX9dCoBW&_nc_ht=scontent.xx&oh=e1904565c8b54ae7352e4984d35177b4&oe=5F9D29FD"
            alt="Gary Johnson"
          />
        </div>

        <div className="testimonial__authorInfo">
          <p className="testimonial__author">Ben Harvey</p>
          <p className="testimonial__company">Personal Website</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
