import { useState } from "react";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => ! prevState);
  };
  console.log(isOpen)
  return (
    <div className="popup-container">
      <nav className="navbar">
        <li 
          className="filter-menue"
          onClick={handleClick}
          style={{display: !isOpen ? "block" : "none"}}
        >
          Search & Filter
        </li>
      </nav>
      <div
        className="pop-up"
        style={{display: isOpen ? "block" : "none"}}
       >
        <form className="search-form">
          <h2>Search by Pokemon Type or Name</h2>
          <TextField.Root>
            <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input placeholder="Search the docs…" />
          </TextField.Root>
        </form>
      </div>
    </div>
  )
}

export default Popup