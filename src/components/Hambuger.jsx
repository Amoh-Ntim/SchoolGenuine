import { useState } from "react";
import { Link } from 'react-scroll'


const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const [click, setClick] = useState(false)
  const closeMenu=() => setClick(!click)
  return (
    <div className="flex justify-between">
      <img src="background sec-.png" className="absolute"/>
      <div>
           {/* logo */}
           <div className="text-black font-bold text-2xl relative">Brandname</div>
        </div>
      <div className="relative">
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger icon */}
        </button>
        {isMenuOpen && (
          <div className="top-0 right-0 mt-12 bg-green-300 p-4 shadow-md xs:mb-8 border-green-500 border-4 backdrop-blur-lg bg-opacity-10 rounded-lg">
            {/* Menu items go here */}
            <ul>
            <li><Link to="hero1" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-green-600">Home</Link></li>
            <li><Link to="herogrid" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-green-600">Gallery</Link></li>
            <li><Link to="test" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-green-600">About Us</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-green-600">How We Help</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default HamburgerMenu