import "../../css/Logos.css";
import html from "../../images/logos/html.svg";
import css from "../../images/logos/css.svg";
import javascript from "../../images/logos/javascript.svg";
import typescript from "../../images/logos/typescript.svg";
import react from "../../images/logos/react.svg";
import redux from "../../images/logos/redux.svg";
import tailwindcss from "../../images/logos/tailwindcss.svg";
import nodejsicon from "../../images/logos/nodejs-icon.svg";
import sass from "../../images/logos/sass.svg";

const Logos = () => {
  return (
    <div>
      <img src={html} className="icon" />
      <img src={css} className="icon" />
      <img src={javascript} className="icon" />
      <img src={typescript} className="icon" />
      <img src={react} className="icon" />
      <img src={redux} className="icon" />
      <img src={tailwindcss} className="icon" />
      <img src={sass} className="icon" />
      <img src={nodejsicon} className="icon" />
    </div>
  );
};

export default Logos;
