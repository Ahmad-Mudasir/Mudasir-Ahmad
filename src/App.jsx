import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ParticlesBackground from "./components/ParticlesBackground";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
  
    
    <div className="relative h-full antialiased overflow-y-auto">
    
   <ParticlesBackground/>



      <div className="fixed bg-fixed inset-0 bg-cover bg-center bg-img"></div>
      <div className="container relative flex flex-col items-center z-10 p-4 space-y-8 mx-auto">
        <Navbar />
        <Hero />
        <Projects />
        <Bio/>
        <Skills/>
        <Experience/>
        <Education/>
        <Contact/>
      </div>
    </div>

  );
}

export default App;
