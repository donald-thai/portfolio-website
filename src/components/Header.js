import { Link } from "react-router-dom"
import '../styles/header.scss'
import Navbar from "./Navbar"

const Header = ({onToggle, isMenuOpen, color, backgroundColor}) => {

  return (
    <>
      <div className="header" style={{backgroundColor: backgroundColor}}>
        <Link className="logo" to='/' style={{color: color}}>Donald Thai</Link>
        <div onClick={(onToggle)} style={{zIndex: 3}} className='menu-icon'>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={color}
              viewBox="0 0 24 24"
              stroke={color}
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        <Navbar onToggle={onToggle} isMenuOpen={isMenuOpen} color={color}/>
      </div>
    </>
  )
}

export default Header