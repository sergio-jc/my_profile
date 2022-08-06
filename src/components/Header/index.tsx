import { useState } from "react";
import logo from "../../images/myImg/myLogo.jpg";
import "../../css/Header.css";
import Smooth from "../Smooth";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <section id="sec1">
      <div className="App-header">
        <h1>Frontend Developer</h1>
        <p>
          I design and code beautifully simple things, and I love what I do.
        </p>
      <Smooth id={2}/>
      </div>
    </section>
  );
};

export default Header;
