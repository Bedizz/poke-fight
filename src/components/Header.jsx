import "../styles/header.css";
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
      <div className='header-all-container'>
    <div className="header-container">
      <Link to={"/"}><img src="/header-removebg-preview.png" alt="pokemon" /></Link>
      
    </div>
    </div>

    <header>
      <div className="header-container">
        <img src="/header-removebg-preview.png" alt="pokemon" />
      </div>
    </header>
  )
}

export default Header