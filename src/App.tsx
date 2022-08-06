
import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Nav/>
      <Header/> 
      <AboutMe/>
      <Logos/>
      <Portfolio/>
      <Testimonials/>
    </div>
  );
}

export default App;
