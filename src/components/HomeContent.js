import React from 'react'
import '../styles/home.scss'
import img1 from '../images/cherry.jpg'

const HomeContent = () => {
  return (
    <div>
      <div className="home-content-wrapper">
        <img src={img1} alt="project picture" className='home-content-img' />
        <h2>Projects</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sit dolorem distinctio debitis necessitatibus aspernatur, explicabo nobis minima! Autem quam ipsam libero omnis magnam beatae temporibus saepe quibusdam eius repellat?</p>
      </div>
      <div className="home-content-wrapper">
        <img src={img1} alt="project picture" className='home-content-img' />
        <h2>Projects</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sit dolorem distinctio debitis necessitatibus aspernatur, explicabo nobis minima! Autem quam ipsam libero omnis magnam beatae temporibus saepe quibusdam eius repellat?</p>
      </div>
    </div>
  )
}

export default HomeContent