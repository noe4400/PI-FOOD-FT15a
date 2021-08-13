import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from '../Recipe/Recipe';
import { orderResults, setLoading } from '../../actions';
import './Recipes.css';
const Recipes = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.isLoading);
	const foundResults = useSelector(state => state.foundResults);
	const currentPage = useSelector(state => state.currentPage);
	const resultsPerPage = useSelector(state => state.resultsPerPage);
	const searchResults = useSelector(state => state.searchResults);
	const orderBy = useSelector(state => state.orderBy);
	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;

	useEffect(() => {
		dispatch(setLoading(true));
		dispatch(orderResults(searchResults, orderBy));
	}, [dispatch, orderBy, searchResults]);

	console.log(indexOfFirstResult, indexOfLastResult);

	if (isLoading) {
		return <h2 className='loading-message'>Loading....</h2>;
	}
	if (!foundResults) {
		return <h2 className='loading-message'>Not results were found....</h2>;
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
