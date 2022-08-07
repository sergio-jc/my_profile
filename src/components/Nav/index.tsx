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
        {toggle ? (
          <a href="#menu" className="nav__target">
            <img
              src={error}
              alt="menu_icon"
              onClick={() => setToggle(!toggle)}
            />{" "}
          </a>
        ) : (
          <a href="#sec2" className="nav__target">
            <img
              src={menu}
              alt="menu_icon"
              className="error_target"
              onClick={() => setToggle(!toggle)}
            />
          </a>
        )}

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
          <a
            href="#sec6"
            className="nav__link"
            onClick={() => setToggle(!toggle)}
          >
            CONTACT ME
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
