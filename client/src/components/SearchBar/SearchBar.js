import React, { useState } from 'react';
import './SearchBar.css';
import icon from './search.ico';
import { searchByName, setLoading } from '../../actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
	const [userInput, setInput] = useState('');
	const dispatch = useDispatch();
	const inputHandler = e => {
		setInput(e.target.value);
	};

	const searchHandler = () => {
		dispatch(setLoading(true));
		dispatch(searchByName(userInput));
		setInput('');
	};
	return (
		<div class='wrap'>
			<div class='search'>
				<input
					type='text'
					class='searchTerm'
					placeholder='Find any recipe you want'
					value={userInput}
					onChange={inputHandler}
				/>

				<button type='submit' class='searchButton'>
					<i class='fa fa-search' onClick={searchHandler}>
						<img src={icon} />
					</i>
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
