import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from '../Recipe/Recipe';
import './Recipes.css';
const Recipes = () => {
	const isLoading = useSelector(state => state.isLoading);
	const currentPage = useSelector(state => state.currentPage);
	const resultsPerPage = useSelector(state => state.resultsPerPage);
	const searchResults = useSelector(state => state.searchResults);
	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;

	console.log(indexOfFirstResult, indexOfLastResult);

	if (isLoading) {
		return <h2>Loading....</h2>;
	}
	const currrentRecipes = searchResults.slice(
		indexOfFirstResult,
		indexOfLastResult
	);
	const displayResults = currrentRecipes.map(recipe => (
		<Recipe
			key={recipe.id}
			name={recipe.name}
			img={recipe.image}
			diets={recipe.diets}
		/>
	));
	console.log(currrentRecipes);
	return <div className='results-container'>{displayResults}</div>;
};

export default Recipes;
