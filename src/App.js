import "./largeDevice.css";
import "./smallDevice.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";

function App() {
  return (
    <div className="App">
      <div className="innerBackground"></div>
      <div className="outerBackground"></div>
      <div className="body">
        <Navbar />
        <Introduction />
        <Aboutme />
        <Skills />
        <Projects />
        <Contactme />
      </div>
    </div>
  );
}

export default App;
