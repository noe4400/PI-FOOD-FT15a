import React from 'react';
import { useSelector } from 'react-redux';
const Recipes = () => {
	const isLoading = useSelector(state => state.isLoading);
	const currentPage = useSelector(state => state.currentPage);
	const resultsPerPage = useSelector(state => state.resultsPerPage);
	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	console.log(indexOfFirstResult, indexOfLastResult);

	if (isLoading) {
		return <h2>Loading....</h2>;
	}

	return <h2>Results will be here</h2>;
};

export default Recipes;
