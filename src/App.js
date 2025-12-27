import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Activities from "./components/Activities";

function App() {
  return (
    <div className="bg-[#0b1120] text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Activities />
    </div>
  );
}

export default App;
