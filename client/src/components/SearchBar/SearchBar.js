import React, { useState } from "react";
import "./SearchBar.css";
import { searchByName, setLoading } from "../../actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [userInput, setInput] = useState("");
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = () => {
    dispatch(setLoading(true));
    dispatch(searchByName(userInput));
    setInput("");
  };

  const cleanSearchHandler = () => {
    setInput("");
  };
  return (
    <div class="search">
      <input
        type="text"
        class="searchTerm"
        placeholder="Find any recipe you want"
        value={userInput}
        onChange={inputHandler}
      />
      <div className="searchBarIcons">
        <button
          className={userInput.length > 0 ? `btn` : `btn hidden`}
          onClick={cleanSearchHandler}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <button type="submit" class="btn" onClick={searchHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
