import { useState } from "react";
import logo from "../../images/myImg/myLogo.jpg";
import "../../css/Header.css";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App-header">
      <h1>Frontend Developer</h1>
      <p>I design and code beautifully simple things, and I love what I do.</p>
    </div>
  );
};

export default Header;
