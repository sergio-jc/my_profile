import "../../css/Logos.css";
import html from "../../images/logos/html.svg";
import css from "../../images/logos/css.svg";
import javascript from "../../images/logos/javascript.svg";
import typescript from "../../images/logos/typescript.svg";
import react from "../../images/logos/react-1.svg";
import redux from "../../images/logos/redux.svg";
import tailwindcss from "../../images/logos/tailwindcss.svg";
import nodejsicon from "../../images/logos/nodejs-icon.svg";
import sass from "../../images/logos/sass.svg";

const Logos = () => {
  return (
    <div className="App-header">
      <h2>SKILLSET</h2>
      <div>
        <img src={html} className="icon" alt="html_logo"/>
        <img src={css} className="icon" alt="css_log"/>
        <img src={javascript} className="icon" alt="js_logo"/>
        <img src={typescript} className="icon" alt="ts_logo"/>
        <img src={react} className="icon" alt="react_logo"/>
        <img src={redux} className="icon" alt="redux_logo"/>
        <img src={tailwindcss} className="icon" alt="tailwind_logo"/>
        <img src={sass} className="icon" alt="sass_logo"/>
        <img src={nodejsicon} className="icon" alt="nodejs_logo"/>
      </div>
    </div>
  );
};

export default Logos;
