import React from 'react'
import '../styles/footer.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-sm-wrapper'>
        <a href='https://www.linkedin.com/in/donald-thai/' className='footer-icon' target="_blank">
          <LinkedInIcon />
        </a>
        <a href='https://github.com/donald-thai' className='footer-icon' target="_blank">
          <GitHubIcon />
        </a>
      </div>
      <p>© 2022 Donald Thai. All Rights Reserved</p>
    </div>
  )
}

export default Footer