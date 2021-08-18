import React, { useState, useEffect } from 'react';
import './RecipeDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../actions';

function RecipeDetails() {
	const [recipeDEtail, setRecipeDetail] = useState('');
	const isLoading = useSelector(state => state.isLoading);
	const dispatch = useDispatch();
	const regexTags = /(<([^>]+)>)/gi;
	const params = useParams();
	useEffect(() => {
		dispatch(setLoading(true));
		axios.get(`http://localhost:3001/recipes/${params.id}`).then(res => {
			const response = res.data;
			setRecipeDetail(response);
			dispatch(setLoading(false));
		});
	}, []);
	const dishTypeList = recipeDEtail.dishTypes?.map(type => <li>{type}</li>);
	const dietTypesList = recipeDEtail.diets?.map(diet => <li>{diet}</li>);

	if (isLoading) {
		return <h2 className='loading-message'>Loading....</h2>;
	}
	return (
		<div>
			<header>
				<div className='content'>
					<h1>{recipeDEtail.title}</h1>
				</div>
			</header>

			<section className='general-information'>
				<img src={recipeDEtail.image} />
				<div>
					<h1 className='title-text'>
						<span>S</span>ummary:
					</h1>
					<p>{recipeDEtail.summary?.replace(regexTags, '')}</p>
				</div>
			</section>
			<section className='extra-details'>
				{recipeDEtail.spoonacularScore && (
					<div className='card'>
						<div className='content'>
							<h3>Score</h3>
							<h1>{recipeDEtail.spoonacularScore}</h1>
						</div>
					</div>
				)}
				{recipeDEtail.score && (
					<div className='card'>
						<div className='content'>
							<h3>Score</h3>
							<h1>{recipeDEtail.score}</h1>
						</div>
					</div>
				)}
				{recipeDEtail.healthScore && (
					<div className='card'>
						<div className='content'>
							<h3>Health Score</h3>
							<h1>{recipeDEtail.healthScore}</h1>
						</div>
					</div>
				)}

				{recipeDEtail.dishTypes?.length !== 0 && (
					<div className='card'>
						<div className='content'>
							<h3>Dish Types</h3>
							<ul>
								{recipeDEtail.dishTypes?.map(dish => (
									<li>{dish}</li>
								))}
							</ul>
						</div>
					</div>
				)}

				{recipeDEtail.diets?.length !== 0 && (
					<div className='card'>
						<div className='content'>
							<h3>Diet Types</h3>
							<ul>
								{recipeDEtail.diets?.map(diet => (
									<li>{diet.name ? diet.name : diet}</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</section>

			<section className='steps'>
				<div>
					<h1 className='title-text'>
						<span>S</span>teps:
					</h1>
				</div>
				<p>{recipeDEtail.instructions?.replace(regexTags, '')}</p>
			</section>
		</div>
	);
}

export default RecipeDetails;
