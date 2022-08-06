import { useState } from "react";
import logo from "../../images/myImg/myLogo.jpg";
import "../../css/Header.css";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <header className="App-header">
        <h1>Frontend Developer</h1>
        <p>
          I development and code beautifully simple things, and I love what I
          do.
        </p>
      </header>
    </>
  );
};

export default Header;
