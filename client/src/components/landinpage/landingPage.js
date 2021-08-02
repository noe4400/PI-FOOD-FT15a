import React from 'react';
import landingImg from './chef2.png';
import arrow from './arrow.png';

import styles from './ladingPage.css';
import Nav from '../Nav/Nav';

const LandingPage = () => {
	return (
		<div className='container'>
			<Nav />
			<div className='upper-bar'></div>
			<div className='wrapper'>
				<div className='left-side'>
					<h1>Welcome</h1>
					<h3>
						<span>Join us</span> and discover hundreds of recipes.
					</h3>
					<button class='log-in-button'>
						Star Now! <img src={arrow} alt='left arrow' />{' '}
					</button>
				</div>
				<div className='right-side'>
					<img src={landingImg} alt='chef-image' />
					<div className='rectangle-img'></div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
