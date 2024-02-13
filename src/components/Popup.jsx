import { useState } from "react";
import { TextField, Button } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const Popup = ({ setSubmitText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    setIsOpen(prevState => ! prevState);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault;
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
        <form className="search-form" onSubmit={handleSubmit}>
          <h2>Search by Pokemon Name or Type</h2>

          <TextField.Root value={searchText} name="sarchName" onChange={handleChange}>
            <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input placeholder="Pokemon name or type" />
          </TextField.Root>

          <Button color="indigo" variant="soft">
            Search Pokemon
          </Button>

        </form>
      </div>
    </div>
  )
}

export default Popup