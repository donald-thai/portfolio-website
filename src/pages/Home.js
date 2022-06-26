import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';
import { useState } from "react"
import '../styles/home.scss'


const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header onToggle={toggleMenu} isMenuOpen={isMenuOpen} color='white' backgroundColor='#3b444b  '/>
      <div className='body'>
        <Hero isMenuOpen={isMenuOpen}/>
        <HomeContent />
      </div>
      <Footer />
    </>
  )
}

export default Home