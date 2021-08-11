import React from 'react';
import RecipeCSS from './Recipe.module.css';
const Recipe = props => {
	const types = props.diets.map(type => <li>{type}</li>);
	return (
		<div className={RecipeCSS.card}>
			<img className={RecipeCSS.img} src={props.img} alt='' />
			<div className={RecipeCSS.textContainer}>
				<h3 className={RecipeCSS.h4}>{props.name}</h3>
				<p>
					{types.length > 0 && <span>Diets: </span>}

					<ul>{types}</ul>
				</p>
			</div>
			<a class={RecipeCSS.a} href='#'>
				More information
			</a>
		</div>
	);
};

export default Recipe;
