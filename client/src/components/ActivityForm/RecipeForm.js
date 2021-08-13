import React from 'react';
import './RecipeForm.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDietTypes, postRecipe } from '../../actions';

const RecipeForm = () => {
	const dispatch = useDispatch();

	const [userInput, setInput] = useState({
		name: '',
		score: 0,
		healthScore: 0,
		summary: '',
		steps: [],
		dietTypesArray: [],
	});

	const submitHandler = () => {
		console.log('submit click');
	};

	useEffect(() => {
		dispatch(getDietTypes());
	}, []);

	const dietTypes = useSelector(state => state.dietTypes);
	console.log(dietTypes);
	const auxDietTypes = [...userInput.dietTypesArray];
	const handleCheckDietTypeElement = e => {
		dietTypes.forEach(diet => {
			if (diet === e.target.value) {
				if (e.target.checked) {
					auxDietTypes.push(e.target.value);
				} else {
					const index = auxDietTypes.indexOf(e.target.value);
					console.log(index);
					if (index !== -1 && auxDietTypes.length > 0) {
						auxDietTypes.splice(index, 1);
					}
				}
			}
		});
		// console.log(dietTypes);
		// /*modificar stado aqui*/
		console.log(auxDietTypes);
		setInput(prevState => {
			return {
				...prevState,
				dietTypesArray: auxDietTypes,
			};
		});
	};

	const inputHandler = e => {
		if (e.target.name === 'name') {
			setInput(prevState => {
				return {
					...prevState,
					name: e.target.value,
				};
			});
		}

		if (e.target.name === 'score') {
			setInput(prevState => {
				return {
					...prevState,
					score: e.target.value,
				};
			});
		}

		if (e.target.name === 'healthScore') {
			setInput(prevState => {
				return {
					...prevState,
					healthScore: e.target.value,
				};
			});
		}
	};
	const DietOptions = dietTypes.map((e, index) => (
		<label for={`opt${index}`} className='radio' key={index}>
			<input
				type='checkbox'
				id={`opt${index}`}
				className='radio-input'
				name='diets'
				value={e}
				onClick={handleCheckDietTypeElement}
			/>
			<div className='radio__radio'></div>
			{e}
		</label>
	));
	return (
		<div className='wrapper'>
			<div className='title'>Add your own recipe</div>
			<div className='form'>
				<div className='input-field'>
					<label>Recipe's name:</label>
					<input
						className='input'
						type='text'
						name='name'
						value={userInput.name}
						onChange={inputHandler}
					/>
				</div>

				<div className='input-field'>
					<label>Recipe's score:</label>
					<input
						className='input'
						type='number'
						name='score'
						value={userInput.score}
						onChange={inputHandler}
					/>
				</div>
				<div className='input-field'>
					<label>Recipe's health score:</label>
					<input
						className='input'
						type='number'
						name='healthScore'
						value={userInput.healthScore}
						onChange={inputHandler}
					/>
				</div>
				<div className='input-field'>
					<label>Recipe's summary:</label>
					<textarea className='textarea' name='summary'></textarea>
				</div>

				<div className='input-field'>
					<label>Recipe's steps:</label>
					<textarea className='textarea' name='steps'></textarea>
				</div>

				<div className='checkbox-container'>
					<div className='title'>
						Select the diet or diets for your recipe:
					</div>
					<div className='box'>{DietOptions}</div>
				</div>

				<div className='input-field'>
					<input
						type='submit'
						value='Add Recipe'
						className='btn'
						onClick={submitHandler}
					/>
				</div>
			</div>
		</div>
	);
};

export default RecipeForm;
