import React, { useState } from "react";
import dynamic from "next/dynamic";
const ScrollspyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

import "../styles/navbar.css";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

function Navbar() {
  const [pages] = useState(["home", "about", "portfolio", "contact"]);
  const [socials] = useState([
    {
      name: "facebook",
      link: "https://www.facebook.com/callum.ilett.1/",
      icon: <FacebookIcon />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/CallumIlett",
      icon: <TwitterIcon />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/callum.ilett/",
      icon: <InstagramIcon />,
    },
    {
      name: "Github",
      link: "https://github.com/Callum-Ilett",
      icon: <GitHubIcon />,
    },
  ]);

  const [activeNavbar, setActiveNavbar] = useState(false);
  return (
    <div className={activeNavbar ? "navbar navbar--open" : "navbar"}>
      <div className="navbar__container">
        <a href="#test" className="navbar__logo">
          <img
            src="https://i.imgur.com/f6Nym66.jpg"
            alt="logo"
            className="navbar__image"
          />

          <h2 className="navbar__title">Callum Ilett</h2>
        </a>

        <div className="navbar__socialLinks">
          {socials.map((social) => {
            return (
              <a href={social.link} title={social.name}>
                {social.icon}
              </a>
            );
          })}
        </div>

        <nav>
          <ScrollspyNav
            scrollTargetIds={pages}
            activeNavClass="active"
            scrollDuration="700"
          >
            <ul className="navbar__menu">
              {pages.map((pageName) => {
                return (
                  <li key={`${pageName}__key`} className="navbar__item">
                    <a
                      className="navbar__link"
                      href={`#${pageName}`}
                      onClick={() => setActiveNavbar(!activeNavbar)}
                    >
                      {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </ScrollspyNav>
        </nav>

        <div className="copyrights">© 2020 All rights reserved.</div>

        <div
          className="navbar__toggle"
          onClick={() => setActiveNavbar(!activeNavbar)}
        >
          {activeNavbar ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
