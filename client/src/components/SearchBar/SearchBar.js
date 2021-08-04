import React from 'react';
import './SearchBar.css';
import icon from './search.ico';

const SearchBar = () => {
	return (
		<div class='wrap'>
			<div class='search'>
				<input
					type='text'
					class='searchTerm'
					placeholder='Find a recipe and give an extra touch to your meals'
				/>
				<button type='submit' class='searchButton'>
					<i class='fa fa-search'>
						<img src={icon} />
					</i>
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
