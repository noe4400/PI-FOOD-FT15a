import React from 'react';
import landingImg from './chef2.png';

import styles from './ladingPage.css';

const LandingPage = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='left-side'>
					<h1>Welcome</h1>
					<h3>Log-in and discovers hundres of recipes.</h3>
					<button class='log-in-button'>Log-in</button>
				</div>
				<div className='right-side'>
					<img src={landingImg} alt='chef-image' />
				</div>
			</div>
			<div class='custom-shape-divider-bottom-1627779220'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'
				>
					<path
						d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
						class='shape-fill'
					></path>
				</svg>
			</div>
		</div>
	);
};

export default LandingPage;
