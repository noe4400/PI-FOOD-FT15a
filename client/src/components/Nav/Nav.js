import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav className='navbar'>
			<div className='logo'>Food App</div>
			<div className='nav-links'>
				<ul>
					<li>
						<a href='#'> Home </a>
					</li>
					<li>
						<a href='#'> About </a>
					</li>
					<li>
						<a href='#'> Contact </a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
