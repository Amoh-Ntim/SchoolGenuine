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
      <img src="background sec-.png" className="absolute top-0 left-0 w-full h-auto flex-shrink-1"/>
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
          <div className="top-0 right-0 mt-12 bg-orange-300 p-4 shadow-md xs:mb-8 border-orange-500 border-4 backdrop-blur-lg bg-opacity-10 rounded-lg">
            {/* Menu items go here */}
            <ul>
            <li><Link to="hero1" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-orange-600">Home</Link></li>
            <li><Link to="product" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-orange-600">Product</Link></li>
            <li><Link to="herocards" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-orange-600">Pricing</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-orange-600">Contact</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-orange-600">Login</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="text-black hover:text-orange-600">Join Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default HamburgerMenu