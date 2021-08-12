import React from 'react';
import './RecipeForm.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDietTypes } from '../../actions';

const RecipeForm = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDietTypes());
	}, []);

	const dietTypes = useSelector(state => state.dietTypes);
	const handleCheckDietTypeElement = e => {
		dietTypes.forEach(diet => {
			if (diet.name === e.target.value) {
				diet.isChecked = e.target.checked;
			}
		});
	};

	const DietOptions = dietTypes.map(e => (
		<label for={`opt${e.id}`} className='radio' key={e.id}>
			<input
				type='checkbox'
				id={`opt${e.id}`}
				className='radio-input'
				name='diets'
				value={e.name}
				onClick={handleCheckDietTypeElement}
			/>
			<div className='radio__radio'></div>
			{e.name}
		</label>
	));
	return (
		<div className='wrapper'>
			<div className='title'>Add your own recipe</div>
			<div className='form'>
				<div className='input-field'>
					<label>Recipe's name:</label>
					<input className='input' type='text' />
				</div>

				<div className='input-field'>
					<label>Recipe's score:</label>
					<input className='input' type='number' />
				</div>
				<div className='input-field'>
					<label>Recipe's health score:</label>
					<input className='input' type='number' />
				</div>
				<div className='input-field'>
					<label>Recipe's summary:</label>
					<textarea className='textarea'></textarea>
				</div>

				<div className='input-field'>
					<label>Recipe's steps:</label>
					<textarea className='textarea'></textarea>
				</div>

				<div className='checkbox-container'>
					<div className='title'>
						Select the diet or diets for your recipe:
					</div>
					<div className='box'>{DietOptions}</div>
				</div>

				<div className='input-field'>
					<input type='submit' value='Add Recipe' className='btn' />
				</div>
			</div>
		</div>
	);
};

export default RecipeForm;
