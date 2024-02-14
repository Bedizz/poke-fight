import { useState } from "react";
import { TextField, Button } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const Popup = ({ setSubmitText, dataLength }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    setIsOpen(prevState => ! prevState);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitText(searchText);
    setSearchText("");
  }

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
        <form className="search-form" onSubmit={(event) => handleSubmit(event)}>
          <div className="search-title">
            <h2>Search by Pokemon Name or Type</h2>
            <button type="button" className="popup-btn" onClick={handleClick}>X</button>
          </div>
          <TextField.Root name="sarchName">
            <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input placeholder="Pokemon name or type" value={searchText} onChange={handleChange}/>
          </TextField.Root>

          <Button color="indigo" variant="soft">
            {dataLength === 0 ? "Reset" : "Search Pokemon"}
          </Button>

        </form>
      </div>
    </div>
  )
}

export default Popup