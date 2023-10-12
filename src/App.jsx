import './App.css'
import{ useState, useEffect } from 'react';
import Hero1 from './components/Hero/Hero1'
import Hero1b from './components/Hero/Hero1b'
import Navbar from './components/Navbar/Navbar'
import HamburgerMenu from './components/Navbar/Hambuger';
import Hero2 from './components/Hero/Hero2';
import Hero3 from './components/Hero/Hero3';
import Hero4 from './components/Hero/Hero4';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check the screen width when the component mounts and on resize
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 840); // Adjust the breakpoint as needed
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    <div>
    {isSmallScreen ? <HamburgerMenu /> : <Navbar />}
      <Hero1 />
      <Hero1b/>
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </div>
    </>
  )
}

export default App
