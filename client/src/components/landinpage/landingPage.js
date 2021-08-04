import React from 'react';
import landingImg from './chef2.png';
import arrow from './arrow.png';
import { Link } from 'react-router-dom';

import styles from './ladingPage.css';

const LandingPage = () => {
	return (
		<div className='container'>
			<div className='upper-bar'></div>
			<div className='wrapper'>
				<div className='left-side'>
					<h1>Welcome</h1>
					<h3>
						<span>Join us</span> and discover hundreds of recipes.
					</h3>
					<Link to='/home'>
						<button class='log-in-button'>
							Star Now! <img src={arrow} alt='left arrow' />{' '}
						</button>
					</Link>
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
