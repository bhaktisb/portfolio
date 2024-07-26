import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Activities from './components/Activities'
import Contact from './components/Contact';
// import { Router } from 'react-router-dom';
import './App.css';

function App() {
  return (

  <div>
  <Navbar/>
  <Hero/>
  <TechStack/>
  <Projects/>
  <Activities/>
  <Contact/>
  </div>
 

  );
}

export default App;
