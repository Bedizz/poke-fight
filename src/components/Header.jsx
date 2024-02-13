import { useLocation } from "react-router-dom";
import Popup from "./Popup";
import "../styles/header.css";
const Header = () => {
  const location = useLocation();
  console.log(location)
  return (
    <header>
      <h1>Poke Fight</h1>
      {location.pathname === "/pokemon"
       ? <Popup />
        :""}

    </header>

  )
}

export default Header