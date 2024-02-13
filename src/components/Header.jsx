
import { useLocation } from "react-router-dom";
import Popup from "./Popup";
import "../styles/header.css";
import './header.css'

const Header = () => {
  
  const location = useLocation();

  return (

    <header>
      <div className="header-container">
        <img src="/header-removebg-preview.png" alt="pokemon" />
      </div>
      {location.pathname === "/pokemon"
       ? <Popup />
        :""}
    </header>
  )
}

export default Header