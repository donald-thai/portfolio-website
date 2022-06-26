import '../styles/header.scss'
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react"

const Navbar = ({isMenuOpen, onToggle}) => {

  const navRef = useRef();

  const handleOutsideClick = (e) => {
    // First part checks for outside click. e.target is basically the HTMl element that the mouse clicked on (e is the event). navRef.current gives us access to the actual HTML element of whatever the navRef is given to.
    if (!navRef.current.contains(e.target) && isMenuOpen) {
      onToggle()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    
    // Cleanup
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  })

  return (
    <>
      <nav ref={navRef} className= {"nav " + (isMenuOpen ? "nav-open" : "nav-close")}>
        <NavLink className="nav-tab" to="/">Home</NavLink>
        <NavLink className="nav-tab" to="/about">About</NavLink>
        <NavLink className="nav-tab" to="/projects">Projects</NavLink>
        <NavLink className="nav-tab" to="/contact">Contact</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
