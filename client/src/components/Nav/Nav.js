import React, { useState } from "react";
import { Link } from "react-router-dom";
import navStyles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.logo}>Food App</div>
      <div className={navStyles.centerDiv}>
        <ul
          className={
            toggle
              ? `${navStyles.navMenu} ${navStyles.active}`
              : `${navStyles.navMenu}`
          }
        >
          <li className={navStyles.navLink}>
            <Link to="/home"> Home </Link>
          </li>

          <li className={navStyles.navLink}>
            <Link to="/about"> About </Link>
          </li>

          <li className={navStyles.navLink}>
            <Link to="/addRecipe">Add a Recipe</Link>
          </li>
        </ul>
      </div>
      <div className={navStyles.rightDiv}>
        {!toggle && (
          <button
            onClick={toggleHandler}
            className={` ${navStyles.toggleButton} ${navStyles.buttonIcons}  `}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        {toggle && (
          <button
            onClick={toggleHandler}
            className={` ${navStyles.toggleButton} ${navStyles.buttonIcons}  `}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        <button className={navStyles.buttonIcons}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
