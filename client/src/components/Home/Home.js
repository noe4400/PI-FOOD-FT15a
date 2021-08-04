import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';
import chef from './chef.png';
const Home = () => {
	return (
		<div className='header-container'>
			<div className='img-header-container'>
				<h1>Love for cooking?</h1>
			</div>
			<div className='chef-bar-wrapper'>
				<img className='chef' src={chef} />
				<div className='searchbox-container'>
					<SearchBar />
				</div>
			</div>
		</div>
	);
};
export default Home;
