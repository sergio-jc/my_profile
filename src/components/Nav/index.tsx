import menu from "../../images/logos/menu.svg";
import error from "../../images/logos/error.svg";

import "../../css/Nav.css";
import { useState } from "react";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  let menuIcon = toggle ? error : menu;
  return (
    <div className="menu_icon">
      <nav className="nav">
        <a href="#menu" className="nav__target">
          <img
            src={menuIcon}
            alt="menu_icon"
            onClick={() => setToggle(!toggle)}
          />
        </a>
        {toggle && (
          <div className="nav__links" id="menu">
            <a
              href="#sec1"
              className="nav__link"
              onClick={() => setToggle(!toggle)}
            >
              HOME
            </a>
            <a
              href="#sec2"
              className="nav__link"
              onClick={() => setToggle(!toggle)}
            >
              ABOUT ME
            </a>
            <a
              href="#sec3"
              className="nav__link"
              onClick={() => setToggle(!toggle)}
            >
              SKILLSET
            </a>
            <a
              href="#sec4"
              className="nav__link"
              onClick={() => setToggle(!toggle)}
            >
              PORTFOLIO
            </a>
            <a
              href="#sec5"
              className="nav__link"
              onClick={() => setToggle(!toggle)}
            >
              TESTIMONIALS
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
