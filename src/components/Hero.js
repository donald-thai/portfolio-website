import { Link } from "react-router-dom"
import self_pic from '../images/me.JPG'
import { Button, Avatar } from "@mui/material"


const Hero = ({isMenuOpen}) => {
  return (
    <div className="home-hero-wrapper">
      <div className="home-hero-bg"></div>
      <Avatar src={self_pic} className='home-hero' />
      <div className="home-hero-text-wrapper">
        <h1 className="home-name">Hi, I'm Donald Thai</h1>
        <p className="home-self-description">An avid problem solver and aspiring software engineer</p>
      </div>
      <div style={{display: 'flex'}}>
        <Button variant="contained" className={"home-about-button" + (isMenuOpen ? ' home-about-button-hide' : '')} >About me! 👋</Button>
      </div>
    </div>  
  )
}

export default Hero