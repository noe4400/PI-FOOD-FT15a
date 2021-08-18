import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';
import { getDietTypes, searchBy } from '../../actions';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDietTypes());
		dispatch(searchBy());
	}, []);
	return (
		<div className='header-wrapper'>
			<div className='header-container'>
				<div className='overlay'></div>
				<h1>Love cooking?</h1>
				<SearchBar />
			</div>
		</div>
	);
};
export default Home;
