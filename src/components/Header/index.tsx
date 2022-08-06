import { useState } from 'react'
import logo from "../../images/myImg/myLogo.jpg";
import "../../css/Header.css"

const Header = () => {
    const [count, setCount] = useState(0);
  return (
    <>
    <header className="App-header">
        <div>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <h2>Ronaldo Jara</h2>
            <p>Front End Developer</p>
          </div>
        </div>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </>
  )
}

export default Header