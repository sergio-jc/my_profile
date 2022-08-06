import menu from "../../images/logos/menu.svg";
import "../../css/Nav.css";
const Nav = () => {
  return (
    <div className="menu_icon">
      <nav className="nav">
        <a href="#menu" className="nav__target">
          <img src={menu} alt="menu_icon" />
        </a>
        <div className="nav__links" id="menu">
          <a href="#sec1" className="nav__link">
            HOME
          </a>
          <a href="#sec2" className="nav__link">
            ABOUT ME
          </a>
          <a href="#sec3" className="nav__link">
            SKILLSET
          </a>
          <a href="#sec4" className="nav__link">
            PORTFOLIO
          </a>
          <a href="#sec5" className="nav__link">
            TESTIMONIALS
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
