import React from 'react';
import RecipeCSS from './Recipe.module.css';
import { Link } from 'react-router-dom';
const Recipe = props => {
	const types = props.diets?.map(type => (
		<li>{type.name ? type.name : type}</li>
	));
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
			<Link class={RecipeCSS.a} to={`/country/${props.id}`}>
				More information
			</Link>
		</div>
	);
};

export default Recipe;
