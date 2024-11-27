import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import TypingEffectTitle from "./components/TypingEffectTitle.jsx";
import StarryBackground from "./components/StarryBackground.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";
import Technical from "./pages/Technical.jsx";
import Stack from "./pages/Stack.jsx";
import MainTitle from "./components/AboutTitle.jsx";

const App = () => {
  const [showStarryBackground, setShowStarryBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStarryBackground(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const scrollAbout = () => {
    if (aboutRef.current !== null) {
      aboutRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const scrollTech = () => {
    if (techRef.current !== null) {
      techRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const scrollProjects = () => {
    if (projectsRef.current !== null) {
      projectsRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const scrollExperience = () => {
    if (experienceRef.current !== null) {
      experienceRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const scrollEducation = () => {
    if (educationRef.current !== null) {
      educationRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div className="">
      <div className="relative min-h-screen w-full bg-black">
        {/* Navbar with all scroll functions passed as props */}
        <div className="">
          <Navbar
            scrollAbout={scrollAbout}
            scrollTech={scrollTech}
            scrollProjects={scrollProjects}
            scrollExperience={scrollExperience}
            scrollEducation={scrollEducation}
          />
        </div>
        {showStarryBackground && <StarryBackground />}

        <div className="min-h-[50vh] text-center sm:mx-0 sm:text-left">
          {/* About Section */}
          <div ref={aboutRef}>
            <About />
          </div>

          <Stack />

          {/* Technical Section */}
          <div className="text-xl" ref={techRef}>
            <Technical />
          </div>

          {/* Projects Section */}
          <div className="relative" ref={projectsRef}>
            <Projects />
          </div>
        </div>

        {/* Experience Section */}
        <div ref={experienceRef}>
          <Experience />
        </div>

        {/* Education Section */}
        <div ref={educationRef}>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default App;
