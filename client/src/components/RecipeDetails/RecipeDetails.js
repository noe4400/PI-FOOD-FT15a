import React, { useState, useEffect } from 'react';
import './RecipeDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
	const [recipeDEtail, setRecipeDetail] = useState('');
	const params = useParams();
	useEffect(() => {
		axios.get(`http://localhost:3001/recipes/${params.id}`).then(res => {
			const response = res.data;
			console.log(response);
			setRecipeDetail(response);
		});
	}, []);
	const dishTypeList = recipeDEtail.dishTypes?.map(type => <li>{type}</li>);
	const dietTypesList = recipeDEtail.diets?.map(diet => <li>{diet}</li>);

	return (
		<div>
			<header>
				<div className='content'>
					<h1>{recipeDEtail.title}</h1>
					{/* <h4>Dish Types:</h4>
				<ul>{dishTypeList}</ul>
				<h4>Dish Diets:</h4>
				<ul>{dietTypesList}</ul> 
               */}
				</div>
				{/* <img src={recipeDEtail.image} /> */}
				{/* <div className='col1'>
				<div className='recipe-name'></div>
			

				<div className='recipe-information'></div>
			</div>
			<div className='col2'>
				<aside></aside>
			</div> */}
			</header>

			<section className='general-information'>
				<img src={recipeDEtail.image} />
				<div>
					<h1 className='title-text'>
						<span>S</span>ummary:
					</h1>
					<p>{recipeDEtail.summary}</p>
				</div>
			</section>

			<section className='steps'>
				<div>
					<h1 className='title-text'>
						<span>S</span>teps:
					</h1>
				</div>
				<p>{recipeDEtail.instructions}</p>
			</section>
		</div>
	);
}

export default RecipeDetails;
