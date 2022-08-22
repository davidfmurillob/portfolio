import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillSection from "./components/SkillSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="bg-mygray-500">
      <Navbar />
      <Hero />
      <About />
      <SkillSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
