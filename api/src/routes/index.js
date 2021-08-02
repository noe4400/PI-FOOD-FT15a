const { Router } = require('express');
const { Recipe, DietType } = require('../db');
const { Op, DataTypes } = require('sequelize');
const { API_KEY } = process.env;
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:id', async (req, res) => {
	let { id } = req.params;

	if (!id) return res.status(404).send('invalid id');
	try {
		if (id.includes('-')) {
			id = id.split('-');
			const getlocalRecipeById = await Recipe.findByPk(parseInt(id[1]));
			if (!getlocalRecipe) return res.status(404).send('Not found');
			return res.send(getlocalRecipe);
		}

		const getReceipeById = await axios.get(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
		);

		// if (!getReceipeById) return res.status(404).send('Not found');

		res.send(getReceipeById.data);
	} catch (err) {
		res.status(404).send('Not found');
	}
});

router.get('/recipes', async (req, res) => {
	const { name } = req.query;
	if (!name) return res.status(404).send('Please enter a valid name');
	const apiRequest = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${name}&addRecipeInformation=true&apiKey=${API_KEY}`
	);
	let responseApi = apiRequest.data.results;
	let filterResponse;
	if (responseApi.length > 0) {
		filterResponse = responseApi.map(recipe => ({
			id: recipe.id,
			name: recipe.title,
			image: recipe.image,
			summary: recipe.summary,
			dishTypes: recipe.dishTypes,
			healthscore: recipe.healthScore,
			score: recipe.spoonacularScore,
			diets: recipe.diets,
			steps: recipe.analyzedInstructions.map(steps => steps.steps),
		}));
	}

	const getRecipe = await Recipe.findAll({
		where: { name: { [Op.iLike]: `%${name}%` } },
	});

	if (getRecipe.length > 0 && responseApi.length > 0) {
		filterResponse = [...filterResponse, ...getRecipe];
	}
	if (responseApi.length === 0 && getRecipe.length > 0) {
		filterResponse = [...getRecipe];
	}

	if (!filterResponse) return res.status(404).send('Not items were found');

	res.status(200).send(filterResponse);
});

router.get('/types', async (req, res) => {
	let getTypes = await DietType.findAll();

	if (getTypes.length > 0) return res.send(getTypes);

	const dietTypesArray = [
		'Gluten Free',
		'Ketogenic',
		'Vegetarian',
		'Lacto-Vegetarian',
		'Ovo-Vegetarian',
		'Vegan',
		'Pescetarian',
		'Paleo',
		'Primal',
		'Whole30',
	];

	const promises = dietTypesArray.map(async diet => {
		const createDataType = await DietType.create({
			name: diet,
		});
	});

	const promisesResult = await Promise.all(promises);

	if (!promisesResult)
		return res
			.status(404)
			.send('Unable to obtain diet types, please try again');

	getTypes = await DietType.findAll();
	res.send(getTypes);
});

router.post('/recipe', async (req, res) => {
	const { name, summary, score, healthscore, steps } = req.body;
	const newRecipe = await Recipe.create({
		name,
		summary,
		score,
		healthscore,
		steps,
	});
	res.send('Recipe was created successfully');
});

module.exports = router;
