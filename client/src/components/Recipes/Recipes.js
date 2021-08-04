import React from 'react';
import { useSelector } from 'react-redux';
const Recipes = () => {
	const isLoading = useSelector(state => state.isLoading);
	if (isLoading) {
		return <h2>Loading....</h2>;
	}

	return <h2>Results will be here</h2>;
};

export default Recipes;
