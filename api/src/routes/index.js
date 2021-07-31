const { Router } = require('express');
const { Recipe } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
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
