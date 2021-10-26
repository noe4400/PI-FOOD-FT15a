import React from "react";
import { Link } from "react-router-dom";
import navStyles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={navStyles.navigationBar}>
      <nav className={navStyles.navbar}>
        <div className={navStyles.logo}>Food App</div>
        <div className={navStyles.navLinks}>
          <ul>
            <li>
              <Link to="/home"> Home </Link>
            </li>

            <li>
              <Link to="/about"> About </Link>
            </li>

            <li>
              <Link to="/addRecipe">Add a Recipe</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
