import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative h-full antialiased overflow-y-auto">
      <div className="fixed bg-fixed inset-0 bg-cover bg-center bg-img"></div>
      <div className="container relative flex flex-col items-center z-10 p-4 space-y-8 mx-auto">
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;
