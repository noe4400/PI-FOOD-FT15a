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
	const { id } = req.params;
	if (!id) return res.status(404).send('invalid id');
	const getRecipeById = await Recipe.findByPk(id);
	if (!getRecipe) return res.status(404).send('Not found');
	res.json.send(getRecipeById);
});

router.get('/recipes', async (req, res) => {
	const { name } = req.query;
	if (!name) return res.status(404).send('Please enter a valid name');
	const apiRequest = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${name}&addRecipeInformation=true&apiKey=${API_KEY}`
	);
	let responseApi = apiRequest.data.results;
	const getRecipe = await Recipe.findAll({
		where: { name: { [Op.iLike]: `%${name}%` } },
	});
	if (getRecipe.length > 0) {
		responseApi = [...responseApi, ...getRecipe];
	} else {
		responseApi = getRecipe;
	}

	if (!responseApi) return res.status(404).send('Not found');

	res.status(202).send(responseApi);
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
