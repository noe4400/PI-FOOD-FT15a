const { Router } = require('express');
const { Recipe } = require('../db');
const { Op } = require('sequelize');
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
	if (!name) return res.status(404).send('Invalid name');
	const getRecipe = await Recipe.findAll({
		where: { name: { [Op.iLike]: `%${name}%` } },
	});

	if (!getRecipe) return res.status(404).send('Not found');
	res.status(202).send(getRecipe);
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
