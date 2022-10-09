import Home from "./components/HomePage/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import "./components/style.css";
import ProjectPage from "./components/Projects/ProjectPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "#242424";
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<ProjectPage />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
