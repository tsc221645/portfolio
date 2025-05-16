import { LoadingScreen } from './components/LoadingScreen'
import { MobileMenu } from './components/MobileMenu';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects';
import { Labs } from './components/sections/Labs'
import { Contact } from './components/sections/Contact';
import "./index.css"
import './App.css'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const[menuOpen, setMenuOpen]= useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {isLoaded && (
        <div className="min-h-screen bg-[#0E2431] text-gray-100 transition-opacity duration-700 opacity-100">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Labs />
          <Contact />
        </div>
        
      )}
    </>
  )
}

export default App