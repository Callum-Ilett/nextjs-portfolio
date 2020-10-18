import React, { useState, useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";

function Gallery() {
  const [isotope, setIsotope] = useState(null);

  const [filters, updateFilters] = useState([{ label: "All", active: true }]);

  const [filterBy, setFilterBy] = useState("all");

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function importIsotope() {
      const Isotope = (await import("isotope-layout")).default;
      setIsotope(
        new Isotope(".portfolio__gallery", {
          itemSelector: ".portfolio__item",
          layoutMode: "fitRows",
        })
      );
    }

    importIsotope();

    axios
      .get("https://www.callumilett.com/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let categories = projects
      .flatMap((project) => project.filters)
      .filter((filterName, index, arr) => arr.indexOf(filterName) === index);

    categories.forEach((category) => {
      updateFilters((filters) => [
        ...filters,
        {
          label: category,
          active: false,
        },
      ]);
    });
  }, [projects]);

  useEffect(() => {
    if (isotope) {
      filterBy === "all"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterBy}` });
    }
  }, [isotope, filterBy]);

  const onFilter = (event) => {
    const {
      target: { value },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label.toLowerCase() === value) {
          return {
            ...f,
            active: true,
          };
        }

        return { ...f, active: false };
      })
    );

    setFilterBy(value);
  };

  return (
    <div className="gallery">
      <div className="portfolio__filters">
        {filters.map((f, index) => (
          <button
            key={index}
            className={f.active ? "filter__btn active" : "filter__btn"}
            onClick={onFilter}
            value={f.label.toLowerCase()}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="portfolio__gallery">
        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              className={`portfolio__item ${project.filters
                .map((filter) => filter.toLowerCase())
                .join(" ")}`}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="portfolio__details">
                <h4>{project.name}</h4>
                <p className="mt-5">
                  <a
                    href={project.github}
                    target="__blank"
                    className="btn btn--light btn--sm mr-2"
                  >
                    <GitHubIcon />
                    Github
                  </a>

                  <a
                    href={project.demo}
                    target="__blank"
                    className="btn btn--primary btn--sm"
                  >
                    <VisibilityIcon />
                    Demo
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
