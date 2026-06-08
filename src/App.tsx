import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import BeyondCoding from "./components/sections/BeyondCoding";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Journey from "./components/sections/Journey";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import SoftSkills from "./components/sections/SoftSkills";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Journey />

      <Experience />

      <Projects />

      <Skills />

      <SoftSkills />

      <Certifications />

      <BeyondCoding />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
