import React from 'react';
import './RecipeForm.css';

const RecipeForm = () => {
	return (
		<div className='form-container'>
			<div>
				<h1> Share your favorites recipes </h1>
			</div>

			<form action='#'>
				<label for='fname'>Name:</label>
				<input
					type='text'
					name='recipe-name'
					placeholder='Entered a name for your recipe to be added'
				/>
				<label for='fname'>Description:</label>
				<textarea
					name='summary'
					rows='4'
					cols='50'
					placeholder='Write a brief description of your recipe'
				></textarea>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default RecipeForm;
