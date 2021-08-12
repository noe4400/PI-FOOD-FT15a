import React from 'react';
import landingImg from './chef2.png';
import arrow from './arrow.png';
import { Link } from 'react-router-dom';

import landingStyles from './ladingPage.module.css';

const LandingPage = () => {
	return (
		<div className={landingStyles.container}>
			<div className={landingStyles.wrapper}>
				<div className={landingStyles.leftSide}>
					<h1>Welcome</h1>
					<h3>
						<span>Join us</span> and discover hundreds of recipes.
					</h3>

					<Link to='/home'>
						<button class={landingStyles.logInButton}>
							Star Now! <img src={arrow} alt='left arrow' />{' '}
						</button>
					</Link>
				</div>
				<div className={landingStyles.rightSide}>
					<img src={landingImg} alt='chef-image' />
					<div className={landingStyles.rectangleImg}></div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
